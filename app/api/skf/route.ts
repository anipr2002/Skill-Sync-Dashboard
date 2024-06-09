import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

import ShortUniqueId from 'short-unique-id';
import { SkillTag } from "@/store/listing";


export async function GET() {
  const { randomUUID } = new ShortUniqueId();

  const response = await fetch("https://career.skf.com/search/?createNewAlert=false&q=schweinfurt&optionsFacetsDD_country=DE&optionsFacetsDD_location=&optionsFacetsDD_customfield2=&optionsFacetsDD_department=");
  const html = await response.text();
    const dom = new JSDOM(html);
  const document = dom.window.document;

  const jobRows = document.querySelectorAll(".data-row");

  const jobDetails = [];
  for (const row of jobRows) {

    const jobID = randomUUID(5); // Generate a random jobID

    const companyName = "SKF "; // Hardcoded company name
    const iconSrc = "https://www.skf.com/v2/assets/img/skf-logo-blue.svg"; // Hardcoded company logo

    const jobTitleElement = row.querySelector(".jobTitle-link");
    const positionName = jobTitleElement?.textContent?.trim() ?? "";

    // const jobFacilityElement = row.querySelector(".jobFacility");
    // const tags = jobFacilityElement?.textContent?.trim() ?? "";
    const tags : any[] = []

    const jobLocationElement = row.querySelector(".jobLocation");
    const location = jobLocationElement?.textContent?.trim() ?? "";

    const jobsUrl = row.querySelector(".jobTitle-link")?.getAttribute("href");
    const href = `https://career.skf.com${jobsUrl}`;

    const jobDetailsObject = {      
      jobID,
      positionName,
      companyName,
      tags,
      location,
      href,
      iconSrc,
    };

    jobDetails.push(jobDetailsObject);
  }

  return NextResponse.json(jobDetails);
}
