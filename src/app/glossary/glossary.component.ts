import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
    public params : {
    header:string,
    text:string,
    url:string,
    target:string }[];
  

  constructor() {
  this.initializeParam();
   }

  ngOnInit() {
  }

 public initializeParam()
  {
      return  this.params = [
      {
        header:"Clinical Protocol",
        text:"Clinical Protocol is a document that describes how a clinical trial will be conducted (the objective(s), design, methodology, statistical considerations and organization of a clinical trial,) and ensures the safety of the trial subjects and integrity of the data collected.",
        url:"https://cognizant-eba.box.com/s/57u8bg7z3uh4fb3r2se06hjl3ekk53k4",
        target:"Sample protocol document"
      },
      {
        header:"Clinical Trial\Study",
        text:"It is a systematic study of new drug(s) in human subject(s) to generate data for discovering and/or verifying the clinical, pharmacological , and/or adverse effects with the objective of determining safety and /or efficacy of the a new drug.",
        url:"https://cognizant-eba.box.com/s/091cmbtvt25ua6g05gbmsa9d2yltx0vn",
        target:"Pharmaceutical Research & Development process"
      },
      {
        header:"Electronic Data Capture (EDC)",
        text:"An EDC system is software that stores patient data collected in clinical trials. Patient Data is transcribed into the system and saved in an electronic case report form (eCRF). Most common EDCs are : Medidata- RAVE , Oracle - RDC (Remote Data Capture).",
        url:"",
        target:""
      },
      {
        header:"Clinical Trial Management System (CTMS)",
        text:"A Clinical Trial Management System (CTMS) is a software system used by biotechnology and pharmaceutical industries to manage clinical trials in clinical research. The system maintains and manages planning, performing and reporting functions, along with participant contact information, tracking deadlines and milestones.",
        url:"http://www.transceleratebiopharmainc.com/",
        target:"transceleratebiopharmainc"
      },
      {
        header:"Common Protocol Template",
        text:"Common Protocol Template is an TransCelerate initiative of working with industry stakeholders and regulators to create a model clinical trial protocol template containing a common structure and model language. It will utilize libraries to facilitate common language in areas specific to patient population and therapeutic areas. The common protocol template is a foundational element in the longer-term movement towards an electronic protocol.",
        url:"http://www.transceleratebiopharmainc.com/initiatives/common-protocol-template/",
        target:"common protocol template sample"

      },
      {
        header:"Clinical Data Interchange Standards Consortium",
        text:"CDISC is a 501(c)(3) global, non profit charitable organization that develops data standards to streamline clinical research and enable connections to healthcare.",
        url:"https://www.cdisc.org/",
        target:"cdisc.org"
      },
      {
        header:"Protocol Representation Model",
        text:"Protocol Representation Model(PRM), designed by CDISC, provides a standard for planning and designing a research protocol with focus on study characteristics such as study design, eligibility criteria, and requirements from the ClinicalTrials.gov, World Health Organization (WHO) registries, and EudraCT registries. PRM assists in automating CRF creation and EHR configuration to support clinical research and data sharing.",
        target:"",
        url:""
      }
    ];
  }



}
