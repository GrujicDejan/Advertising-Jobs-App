const { application } = require('express');
var express = require('express')
var router = express.Router();
var jwt = require('jsonwebtoken');

const jobs = [
    {
        id: 1,
        user: 'admin',
        jobTitle: "Junior Front-End dev",
        company: "TechInd",
        salary: 600,
        Engagement: "full-time",
        description: "Land Sweet Job Work Remote Anywhere in US. \n Must be a US Citizen or US Resident with Excellent Communication Skills/n We currently have under 20 team members and are growing fast/n Over 40% of our team are Women./n 50% of our Leadership team are Women./n  We have team members across 4 continents/n Tech Stack:/n React for Frontend/n Node GraphQL for Backend/n PostgreSQL for Database/n Both JavaScript and TypeScript/n Engagement: Full Time/n Salary: Competitive - Includes early stage equity comp + growth cash/n Benefits: Medical/Vision/Dental + Family coverage, 401K with contribution",
        requiredEducation: "Graduated computer scientist / Gradueted Software Enginee",
        date: '6/22/2022',
        location: "Novi Sad, Serbia",
        benefits: "fit-pass, private health insurance, tean-buildings, free training",
        skills: "Angular, JS, BootStrap, HMTL & CSS",
        email: "dejan.grujic2000@gmail.com",
        applications: []
    },
    {
        id: 2,
        user: 'user',
        jobTitle: "Medior Java Software Engineer",
        company: "Dignari",
        salary: 1200,
        Engagement: "full-time",
        description: "Dignari is a forward-thinking, human-centered, emerging technology and analytics company that builds solutions to transform business. We’re a woman owned company where diversity is applauded, and success is celebrated. We are seeking a Backend Developer to support the Identity, Credential, and Access Management (ICAM) Program at USCIS. The ICAM Program deploys agile development strategies during the development, testing, and Quality Assurance process to provide the highest quality ICAM solutions to its USCIS and other Government business owners./n Requir....",
        requiredEducation: "None",
        date: '6/14/2022',
        location: "Remote",
        benefits: "free training",
        skills: "Java, JS, SpringBoot, SQL, MYSql, OracleDB, Docker",
        email: "dejan.grujic2000@gmail.com",
        applications: []
    }
];

var checkIfLoggedIn = (req, res, next) => {
  var token = req.get('X-AUTH-HEADER');
  var user = jwt.decode(token);
  if (user && user.user) {
    return next();
  }
  return res.status(403).json({ msg: 'Please login to access this information' });
};

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundJobs = jobs.filter(
      (job) => job.jobTitle.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundJobs);
  }

  return res.status(200).json(jobs);
});

router.get('/:title', (req, res) => {
  let title = req.params.name;
  const foundJob = jobs.find((job) => job.jobTitle.toLowerCase().includes(title.toLowerCase()));
  if (foundJob) {
    res.json(foundJob);
  } else { 
    return res.status(400).json({ msg: 'Job advertising with title ' + title + ' not found.' })
  }
});

router.post('/', checkIfLoggedIn, (req, res) => {
  let newJob = req.body;
  
  const foundJob = jobs.find((job) => job.jobTitle == newJob.jobTitle && job.company == newJob.company);

  if (foundJob) {
    return res.status(400)
      .json({ msg: 'Job advertising seems to already have an id assigned' });
  }

  jobs.push(newJob);
  return res.status(200).json(newJob);
});

router.patch('/', checkIfLoggedIn, (req, res) => {
  let applyInfo = req.body;
  let title = req.query['t']

  const foundJob = jobs.find((job) => job.jobTitle == title);

  if (foundJob) {
    foundJob.applications.push(applyInfo);
    return res.status(200).json({ msg: 'Successfully added' });
  }

  return res.status(400).json({ msg: 'Job with title ' + title + ' not found.' });
});

router.delete('/', checkIfLoggedIn, (req, res) => {
  let title = req.query['t']
  let company = req.query['c']

  for( var i = 0; i < jobs.length; i++){ 
    if ( jobs[i].jobTitle == title && jobs[i].company == company) { 
        jobs.splice(i, 1); 
    }
  }
  
  return res.status(200).json({ msg: 'Successfully deleted' });
});


module.exports = router;