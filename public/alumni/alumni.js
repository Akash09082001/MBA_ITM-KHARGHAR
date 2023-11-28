// alumni testimonial

const alumniData = [
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Shabbir-Mala.webp?mtime=20230313104133&focal=none',
        aName: 'Shabbir Mala',
        aCompany: 'Wells Fargo',
        aPosition: 'Sr. Vice President',
        aBatch: 'Batch 1994-96'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Dipu-Rajan.webp?mtime=20230313104126&focal=none',
        aName: 'Dipu Rajan',
        aCompany: 'HDFC Bank',
        aPosition: 'Vice President',
        aBatch: '2004-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Dipesh-Gajera.webp?mtime=20230313104125&focal=none',
        aName: 'Dipesh Gajera',
        aCompany: 'IDFC FIRST BANK',
        aPosition: 'Vice President',
        aBatch: '2004-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Amitabh-Dalal.webp?mtime=20230313104123&focal=none',
        aName: 'Amitabh Dala',
        aCompany: 'UTI Mutual Fund',
        aPosition: 'Vice President',
        aBatch: '2004-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/jeychandaran-ramkumar.webp?mtime=20230313104128&focal=none',
        aName: 'Ramkumar J.',
        aCompany: 'SAP',
        aPosition: 'Vice President',
        aBatch: '2002-04'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Jignesh-Dawda.webp?mtime=20230313104128&focal=none',
        aName: 'Jignesh Dawda',
        aCompany: 'IDFC Asset Management',
        aPosition: 'Vice President',
        aBatch: '2005-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Navneet-Kumar.webp?mtime=20230313104129&focal=none',
        aName: 'Navneet Kumar',
        aCompany: 'YES Bank Ltd',
        aPosition: 'Executive Vice President',
        aBatch: '2007-09'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Niranjan-Nilekani.webp?mtime=20230313104130&focal=none',
        aName: 'Niranjan Nilekani',
        aCompany: 'ICICI Lombard',
        aPosition: 'Assistant Vice President',
        aBatch: '2009-10'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Harshdeep-Singh.webp?mtime=20230313104127&focal=none',
        aName: 'Harshdeep Singh',
        aCompany: 'Perfios Software Solution',
        aPosition: 'Director (Emerging Accounts)',
        aBatch: '2007-09'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Ashwin-Ganesh.webp?mtime=20230313104123&focal=none',
        aName: 'Ashwin Ganesh',
        aCompany: 'Price Waterhouse Cooper s',
        aPosition: 'Associate Director',
        aBatch: '2007-09'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Tarandeep-Singh-Sekhon.webp?mtime=20230313104134&focal=none',
        aName: 'Tarandeep Singh',
        aCompany: 'KidZania India',
        aPosition: 'Marketing Director',
        aBatch: '2005-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Bharat-Parekh.webp?mtime=20230313104124&focal=none',
        aName: 'Bharat Parekh',
        aCompany: 'CLSA Ltd',
        aPosition: 'Executive Director',
        aBatch: '1991-93'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Shrestha-Mallick.webp?mtime=20230313104133&focal=none',
        aName: 'Shrestha Mallick',
        aCompany: 'NeoGrowth Credit Pvt. Ltd.',
        aPosition: 'Senior Projects Manager',
        aBatch: '2017-19'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Anuj-Bindra.webp?mtime=20230313104124&focal=none',
        aName: 'Anuj Bindra',
        aCompany: 'BSH Holding',
        aPosition: 'Marketing Manager',
        aBatch: '2010-12'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Gautam-PrabhAkar.webp?mtime=20230313104127&focal=none',
        aName: 'Gautam P.',
        aCompany: 'Hyundai Motors India',
        aPosition: 'Assistant Manager',
        aBatch: '2015-17'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Nitin-Nachnani.webp?mtime=20230313104130&focal=none',
        aName: 'Nitin Nachnani',
        aCompany: 'Investment Ltd.',
        aPosition: 'Senior Fund Manager',
        aBatch: '2008-10'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Devasree-Bose-Roy.webp?mtime=20230313104125&focal=none',
        aName: 'Devasree Roy',
        aCompany: 'Blue Drat Express Ltd.',
        aPosition: 'Manager Human Resources',
        aBatch: '2012-14'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Kashish-Arora.webp?mtime=20230313104129&focal=none',
        aName: 'Kashish Arora',
        aCompany: 'VE Commercial Vehicles',
        aPosition: 'Regional Business Manager',
        aBatch: '2009-11'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Debdipto-Mukherjee.webp?mtime=20230313104125&focal=none',
        aName: 'Debdipto M.',
        aCompany: 'Kotak Marketing Bank',
        aPosition: 'Manager',
        aBatch: '2016-18'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Teja-Naganaboyina.webp?mtime=20230313104134&focal=none',
        aName: 'Teja N.',
        aCompany: 'Tata Consultancy Services',
        aPosition: 'Release & Complaince Manager',
        aBatch: '2020-22'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Ranjit-Samal.webp?mtime=20230313104131&focal=none',
        aName: 'Ranjit Samal',
        aCompany: 'DTDC Express Ltd',
        aPosition: 'Head Partner Strategy',
        aBatch: '2012-14'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Rubesh-Mutsuddi.webp?mtime=20230313104132&focal=none',
        aName: 'Rubesh Mutsuddi',
        aCompany: 'Leo Burnett India',
        aPosition: 'Senior Brand Service Associate',
        aBatch: '2017-19'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Chaitanya-Vaidya.webp?mtime=20230313104124&focal=none',
        aName: 'Chaitanya Vaidya',
        aCompany: 'NJ India Invest Pvt Ltd',
        aPosition: 'Senior Executive Product',
        aBatch: '2019-21'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Gopinadhan-KG.webp?mtime=20230313104127&focal=none',
        aName: 'Gopinadhan KG',
        aCompany: 'EMA Partners',
        aPosition: 'Client Partner India & Asia',
        aBatch: '2009-11'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Jayendra-Pratap-Singh.webp?mtime=20230313104128&focal=none',
        aName: 'Jayendra Singh',
        aCompany: 'Lowe s',
        aPosition: 'Lead Analyst',
        aBatch: '2013-15'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Errol-Periera.webp?mtime=20230313104126&focal=none',
        aName: 'Errol Periera',
        aCompany: 'Bank in Muscat',
        aPosition: 'Head SME Credit',
        aBatch: '2005-07'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Siva-Ravi-Teja-vutukuri.webp?mtime=20230313104133&focal=none',
        aName: 'Siva Ravi Teja',
        aCompany: 'PPG Asian Paints',
        aPosition: 'India HR Operations',
        aBatch: '2013-15'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Reet-Bhambhani.webp?mtime=20230313104132&focal=none',
        aName: 'Reet Bhambhani',
        aCompany: 'EMA Partners',
        aPosition: 'Senior Partner',
        aBatch: '2004-06'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Rahul-Rathi.webp?mtime=20230313104131&focal=none',
        aName: 'Rahul Rathi',
        aCompany: 'Axis Bank Ltd.',
        aPosition: 'Senior Partner, Private Banking',
        aBatch: '2007-09'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Gaurav-Agashe.webp?mtime=20230313104127&focal=none',
        aName: 'Gaurav Agashe',
        aCompany: 'Nielsen',
        aPosition: 'Research Analyst',
        aBatch: '2019-21'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Dr.-Avik-Sinha.webp?mtime=20230313104126&focal=none',
        aName: 'Dr. Avik Sinha',
        aCompany: 'Goa Institute of Management',
        aPosition: 'Associate Professor',
        aBatch: '2006-08'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Sourabh-Banerjee.webp?mtime=20230313104134&focal=none',
        aName: 'Sourabh Banerjee',
        aCompany: 'Deloitte',
        aPosition: 'Consultant',
        aBatch: '2019-21'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Mohit-Gopal.webp?mtime=20230313104129&focal=none',
        aName: 'Mohit Gopal',
        aCompany: 'Takaful Emarat Insurance',
        aPosition: 'Head of Bancassurance',
        aBatch: '2000-02'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Akhilesh-Karthikeyan.webp?mtime=20230313104122&focal=none',
        aName: 'Akhilesh K.',
        aCompany: 'Abbott India Ltd.',
        aPosition: 'Business Intelligence Analyst',
        aBatch: '2016-18'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Raunak-Jain.webp?mtime=20230313104131&focal=none',
        aName: 'Raunak Jain',
        aCompany: 'CitiBank',
        aPosition: 'Operation Risk Analyst',
        aBatch: '2016-18'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Shankar-Krishnan-Narasimha.webp?mtime=20230313104133&focal=none',
        aName: 'Shankar N.',
        aCompany: 'HR Anexi Pvt. Ltd.',
        aPosition: 'Consultant',
        aBatch: '2003-05'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Sahil-Kapoor.webp?mtime=20230313104132&focal=none',
        aName: 'Sahil Kapoor',
        aCompany: 'DSP Mutual Fund',
        aPosition: 'Head of Products & Market Strategis',
        aBatch: '2005-07'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Sunjoy-Dhaawan.webp?mtime=20230313104134&focal=none',
        aName: 'Sunjoy Dhaawan',
        aCompany: 'DHL Express India Ltd.',
        aPosition: 'Chief Human Resources Officer',
        aBatch: '1991-93'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Gargee-Sharma.webp?mtime=20230313104126&focal=none',
        aName: 'Gargee Sharma',
        aCompany: 'Capgemini',
        aPosition: 'Talent Management Lead',
        aBatch: '2007-09'
    },
    {
        Id: 1,
        aImg: 'https://dg1xqmhtoint1.cloudfront.net/img/pgdm/lp/Alumni/Mukesh-Kanodia.webp?mtime=20230313104129&focal=none',
        aName: 'Mukesh Kanodia',
        aCompany: 'Piramal Finance',
        aPosition: 'Associate Principal (Investments)',
        aBatch: '2009-11'
    }
];

let output = alumniData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(alumniData) {
    let listItems = `
            <li class="border flex flex-col mt-10 items-center relative border-gray-300 py-4 rounded-md hover:shadow-md h-52">
              <img class="mx-auto absolute -top-[25%]  h-24 w-24 rounded-full border border-gray-300 shadow-md" src=${alumniData.aImg} alt="">
              <h3 class="mt-6 py-3 text-lg font-boldtracking-tight text-brand-red">${alumniData.aName}</h3>
              <p class="text-sm leading-6 font-bold">${alumniData.aCompany}</p>
              <p class="text-sm leading-6 text-gray-600">${alumniData.aPosition}</p>
              <p class="text-sm leading-6 text-gray-600">Batch ${alumniData.aBatch}</p>
            </li>
    `;
    return listItems;
}
