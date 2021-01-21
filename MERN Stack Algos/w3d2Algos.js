
/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [{
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

function webMD(ailments, meds) {
    // set a max
    let maxSymptomMatchCount = 0;

    let ailmentMap = {}; 
    let matchedMeds = [];

    for (const ailment of ailments) {
        ailmentMap[ailment] = true;
    }

    for (const med of meds) {
        let symptomsMatchCount = 0
        for (const symptom of med.treatableSymptoms) {
            if (ailmentMap.hasOwnProperty(symptom)) {
                symptomsMatchCount++
            }
        } 

        if (symptomsMatchCount > 0) {
            if (symptomsMatchCount === maxSymptomMatchCount) {
                matchedMeds.push(med.name);
            } else if (symptomsMatchCount > maxSymptomMatchCount) {
                maxSymptomMatchCount = symptomsMatchCount;
                matchedMeds = [med.name];
            }
        }
    }

    return matchedMeds;

    
}

const webMDFunctional = (ailments, medications) => {
    medications
        .filter(medicine => {
            ailments.every(sym => 
                medicine.treatableSymptoms.includes(sym)
            )
        })
        .map(({name}) => name);

    return medications;
}


console.log(webMD(["pain"], medications)); 
console.log(webMDFunctional(["pain"], medications));

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/