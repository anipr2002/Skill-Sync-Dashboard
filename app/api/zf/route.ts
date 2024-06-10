import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

import ShortUniqueId from 'short-unique-id';
import { SkillTag } from "@/store/listing";

import stopword, { removeStopwords, eng } from 'stopword'


export async function GET() {
  const { randomUUID } = new ShortUniqueId();

  const response = await fetch("https://jobs.zf.com/search/?createNewAlert=false&q=&locationsearch=Schweinfurt&optionsFacetsDD_facility=&optionsFacetsDD_shifttype=&optionsFacetsDD_country=&optionsFacetsDD_customfield4=");
  const html = await response.text();
    const dom = new JSDOM(html);
  const document = dom.window.document;

  const jobRows = document.querySelectorAll(".data-row");

  const jobDetails = [];
  for (const row of jobRows) {

    const jobID = randomUUID(5); // Generate a random jobID

    const companyName = "ZF Friedrichshafen AG"; // Hardcoded company name
    const iconSrc = "https://www.zf.com/master/media/toolbox/assets/img/ZF_logo_STD_Blue_3C.svg"; // Hardcoded company logo

    const jobTitleElement = row.querySelector(".jobTitle-link");
    const positionName = jobTitleElement?.textContent?.trim() ?? "";

    const jobFacilityElement = row.querySelector(".jobFacility");
    const tags = jobFacilityElement?.textContent?.trim() ?? "";

    const jobLocationElement = row.querySelector(".jobLocation");
    const location = jobLocationElement?.textContent?.trim() ?? "";

    const jobsUrl = row.querySelector(".jobTitle-link")?.getAttribute("href");
    const href = `https://jobs.zf.com${jobsUrl}`;

    // split tags into array of tags " " and ","
    const tagsArray = tags.split(/[\s,]+/)
    const stopwords = ["and", "&", "und",","]
    const skillTags = removeStopwords(tagsArray,[...eng, ...stopwords])
    
    console.log(tags)

    const jobDetailsObject = {      
      jobID,
      positionName,
      companyName,
      tags : skillTags,
      location,
      href,
      iconSrc,
    };

    jobDetails.push(jobDetailsObject);
  }

  return NextResponse.json(jobDetails);
}
