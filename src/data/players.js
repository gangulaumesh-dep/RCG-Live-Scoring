const players = [
  // RES
  { id: 1, name: "S. Iyer", team: "RES", role: "BAT" },
  { id: 2, name: "T. Head", team: "RES", role: "BAT" },
  { id: 3, name: "Khawaja", team: "RES", role: "BAT" },
  { id: 4, name: "Sunny", team: "RES", role: "BAT" },
  { id: 5, name: "Navesh", team: "RES", role: "BAT" },
  { id: 6, name: "KL Rahul", team: "RES", role: "WK" },
  { id: 7, name: "N. Pooran", team: "RES", role: "WK" },
  { id: 8, name: "Hales", team: "RES", role: "WK" },
  { id: 9, name: "Umesh Jadeja", team: "RES", role: "FAR" },
  { id: 10, name: "Sam Curran", team: "RES", role: "FAR" },
  { id: 11, name: "Varshith", team: "RES", role: "FAR" },
  { id: 12, name: "Cameron Green", team: "RES", role: "FAR" },
  { id: 13, name: "Maxwell", team: "RES", role: "SAR" },
  { id: 14, name: "Adil", team: "RES", role: "SAR" },
  { id: 15, name: "Bumrah", team: "RES", role: "FB" },
  { id: 16, name: "Malinga", team: "RES", role: "FB" },
  { id: 17, name: "Arshdeep", team: "RES", role: "FB" },
  { id: 18, name: "Shardul", team: "RES", role: "FB" },

  // RKS
  { id: 19, name: "Virat Kohli", team: "RKS", role: "BAT" },
  { id: 20, name: "AB de Villiers", team: "RKS", role: "BAT" },
  { id: 21, name: "Y. Jaiswal", team: "RKS", role: "BAT" },
  { id: 22, name: "Padikkal", team: "RKS", role: "BAT" },
  { id: 23, name: "Gambhir", team: "RKS", role: "BAT" },
  { id: 24, name: "Sasank", team: "RKS", role: "BAT" },
  { id: 25, name: "Chaitu", team: "RKS", role: "BAT" },
  { id: 26, name: "J. Umesh", team: "RKS", role: "FAR" },
  { id: 27, name: "U. Chandra", team: "RKS", role: "FAR" },
  { id: 28, name: "Marcus Stoinis", team: "RKS", role: "FAR" },
  { id: 29, name: "Shiva Kumar", team: "RKS", role: "FAR" },
  { id: 30, name: "Axar Patel", team: "RKS", role: "SAR" },
  { id: 31, name: "Riyan Parag", team: "RKS", role: "SAR" },
  { id: 32, name: "Krunal", team: "RKS", role: "SAR" },
  { id: 33, name: "Haris Rauf", team: "RKS", role: "FB" },
  { id: 34, name: "Jacob Duffy", team: "RKS", role: "FB" },
  { id: 35, name: "James Anderson", team: "RKS", role: "FB" },
  { id: 36, name: "Vyshak Vijay Kumar", team: "RKS", role: "FB" },
  // SLS
  { id: 37, name: "Ruturaj", team: "SLS", role: "BAT" },
  { id: 38, name: "Manideep", team: "SLS", role: "BAT" },
  { id: 39, name: "Brevis", team: "SLS", role: "BAT" },
  { id: 40, name: "Abhishek", team: "SLS", role: "BAT" },
 { id: 41, name: "Will Jacks", team: "SLS", role: "BAT" },
 { id: 42, name: "Ashutosh", team: "SLS", role: "BAT" },

 { id: 43, name: "Urvil", team: "SLS", role: "WK" },
 { id: 44, name: "MS Dhoni", team: "SLS", role: "WK" },

 { id: 45, name: "Ben Stokes", team: "SLS", role: "FAR" },
 { id: 46, name: "M. Amir", team: "SLS", role: "FAR" },
 { id: 47, name: "Ben Cutting", team: "SLS", role: "FAR" },

 { id: 48, name: "S. Narine", team: "SLS", role: "SAR" },
 { id: 49, name: "Rashid Khan", team: "SLS", role: "SAR" },
 { id: 50, name: "Livingstone", team: "SLS", role: "SAR" },

 { id: 51, name: "Trent Boult", team: "SLS", role: "FB" },
 { id: 52, name: "Dale Steyn", team: "SLS", role: "FB" },
 { id: 53, name: "Sandeep Sharma", team: "SLS", role: "FB" },
 { id: 54, name: "Spencer Johnson", team: "SLS", role: "FB" },
 // MRS
{ id: 55, name: "Rohit Sharma", team: "MRS", role: "BAT" },
{ id: 56, name: "Sachin", team: "MRS", role: "BAT" },
{ id: 57, name: "S. Gill", team: "MRS", role: "BAT" },
{ id: 58, name: "P. Arya", team: "MRS", role: "BAT" },
{ id: 59, name: "Tilak", team: "MRS", role: "BAT" },

{ id: 60, name: "Samson", team: "MRS", role: "WK" },
{ id: 61, name: "Kusal Mendis", team: "MRS", role: "WK" },

{ id: 62, name: "Romario Shepherd", team: "MRS", role: "FAR" },
{ id: 63, name: "DJ Bravo", team: "MRS", role: "FAR" },
{ id: 64, name: "Deepak Chahar", team: "MRS", role: "FAR" },

{ id: 65, name: "Kamindu Mendis", team: "MRS", role: "SAR" },
{ id: 66, name: "Moeen Ali", team: "MRS", role: "SAR" },
{ id: 67, name: "Mitchell Santner", team: "MRS", role: "SAR" },
{ id: 68, name: "Maheesh Theekshana", team: "MRS", role: "SAR" },

{ id: 69, name: "Kuldeep Yadav", team: "MRS", role: "SB" },
{ id: 70, name: "Imran Tahir", team: "MRS", role: "SB" },

{ id: 71, name: "Lungi Ngidi", team: "MRS", role: "FB" },
{ id: 72, name: "Umran Malik", team: "MRS", role: "FB" },
// LMS
{ id: 73, name: "M. Guptill", team: "LMS", role: "BAT" },
{ id: 74, name: "Karun", team: "LMS", role: "BAT" },
{ id: 75, name: "Tim David", team: "LMS", role: "BAT" },
{ id: 76, name: "R. Patidar", team: "LMS", role: "BAT" },

{ id: 77, name: "D. Karthik", team: "LMS", role: "WK" },
{ id: 78, name: "Prabhsimran", team: "LMS", role: "WK" },

{ id: 79, name: "Sam Me", team: "LMS", role: "FAR" },
{ id: 80, name: "Venkatesh Iyer", team: "LMS", role: "FAR" },
{ id: 81, name: "N.K. Reddy", team: "LMS", role: "FAR" },
{ id: 82, name: "Harshal", team: "LMS", role: "FAR" },
{ id: 83, name: "Omarzai", team: "LMS", role: "FAR" },

{ id: 84, name: "R. Chase", team: "LMS", role: "SAR" },
{ id: 85, name: "Ashok", team: "LMS", role: "SAR" },
{ id: 86, name: "T. Shamsi", team: "LMS", role: "SAR" },

{ id: 87, name: "Cottrell", team: "LMS", role: "FB" },
{ id: 88, name: "Gopichand", team: "LMS", role: "FB" },
{ id: 89, name: "Prasidh", team: "LMS", role: "FB" },
{ id: 90, name: "J. Archer", team: "LMS", role: "FB" },
// HRS
{ id: 91, name: "Suryakumar Yadav", team: "HRS", role: "BAT" },
{ id: 92, name: "Shivam Dube", team: "HRS", role: "BAT" },
{ id: 93, name: "K. Pietersen", team: "HRS", role: "BAT" },
{ id: 94, name: "Sai Sudharsan", team: "HRS", role: "BAT" },
{ id: 95, name: "Sarfaraz", team: "HRS", role: "BAT" },

{ id: 96, name: "Hope", team: "HRS", role: "WK" },
{ id: 97, name: "Pope", team: "HRS", role: "WK" },
{ id: 98, name: "A. Raghuwanshi", team: "HRS", role: "WK" },

{ id: 99, name: "S. Afridi", team: "HRS", role: "FAR" },

{ id: 100, name: "Harry Potter", team: "HRS", role: "SAR" },
{ id: 101, name: "U.D. Chandu", team: "HRS", role: "SAR" },

{ id: 102, name: "Varun Chakravarthy", team: "HRS", role: "SB" },
{ id: 103, name: "R. Bishnoi", team: "HRS", role: "SB" },
{ id: 104, name: "Markande", team: "HRS", role: "SB" },

{ id: 105, name: "M. Siraj", team: "HRS", role: "FB" },
{ id: 106, name: "Deepesh", team: "HRS", role: "FB" },
{ id: 107, name: "M. Shami", team: "HRS", role: "FB" },
{ id: 108, name: "Mustafizur", team: "HRS", role: "FB" },
// RFS
{ id: 109, name: "Finch", team: "RFS", role: "BAT" },
{ id: 110, name: "Babar", team: "RFS", role: "BAT" },
{ id: 111, name: "Rachin", team: "RFS", role: "BAT" },
{ id: 112, name: "Ponting", team: "RFS", role: "BAT" },
{ id: 113, name: "Rinku", team: "RFS", role: "BAT" },
{ id: 114, name: "Rutherford", team: "RFS", role: "BAT" },

{ id: 115, name: "Dimuth Karunaratne", team: "RFS", role: "WK" },

{ id: 116, name: "K. Pollard", team: "RFS", role: "FAR" },
{ id: 117, name: "A. Russell", team: "RFS", role: "FAR" },
{ id: 118, name: "Dan Christian", team: "RFS", role: "FAR" },

{ id: 119, name: "J. Surya", team: "RFS", role: "SAR" },

{ id: 120, name: "K. Richardson", team: "RFS", role: "FB" },
{ id: 121, name: "N. Tushara", team: "RFS", role: "FB" },
{ id: 122, name: "J. Hazlewood", team: "RFS", role: "FB" },
{ id: 123, name: "J. Unadkat", team: "RFS", role: "FB" },
{ id: 124, name: "E. Malinga", team: "RFS", role: "FB" },

{ id: 125, name: "Mujeeb", team: "RFS", role: "SB" },
{ id: 126, name: "Sai Kishore", team: "RFS", role: "SB" },
// AWS
{ id: 127, name: "V. Sehwag", team: "AWS", role: "BAT" },
{ id: 128, name: "D. Bradman", team: "AWS", role: "BAT" },
{ id: 129, name: "A. Rahane", team: "AWS", role: "BAT" },
{ id: 130, name: "M. Marsh", team: "AWS", role: "BAT" },

{ id: 131, name: "Charles", team: "AWS", role: "WK" },
{ id: 132, name: "Tom Latham", team: "AWS", role: "WK" },

{ id: 133, name: "Irfan", team: "AWS", role: "FAR" },
{ id: 134, name: "J. Overton", team: "AWS", role: "FAR" },
{ id: 135, name: "J. Neesham", team: "AWS", role: "FAR" },

{ id: 136, name: "R. Jadeja", team: "AWS", role: "SAR" },
{ id: 137, name: "Yuvraj Singh", team: "AWS", role: "SAR" },
{ id: 138, name: "S. Raja", team: "AWS", role: "SAR" },
{ id: 139, name: "J. S. Teja", team: "AWS", role: "SAR" },

{ id: 140, name: "Natarajan", team: "AWS", role: "FB" },
{ id: 141, name: "Kaul", team: "AWS", role: "FB" },
{ id: 142, name: "Wood", team: "AWS", role: "FB" },
{ id: 143, name: "Mitchell Starc", team: "AWS", role: "FB" },

{ id: 144, name: "Y. Chahal", team: "AWS", role: "SB" },
// GCP
{ id: 145, name: "S. Raina", team: "GCP", role: "BAT" },
{ id: 146, name: "F. Allen", team: "GCP", role: "BAT" },
{ id: 147, name: "Harsha", team: "GCP", role: "BAT" },
{ id: 148, name: "Suryavanshi", team: "GCP", role: "BAT" },
{ id: 149, name: "Pandu", team: "GCP", role: "BAT" },
{ id: 150, name: "Brook", team: "GCP", role: "BAT" },
{ id: 151, name: "R. Powell", team: "GCP", role: "BAT" },

{ id: 152, name: "Rishabh", team: "GCP", role: "WK" },
{ id: 153, name: "Buttler", team: "GCP", role: "WK" },
{ id: 154, name: "Manikanta", team: "GCP", role: "WK" },

{ id: 155, name: "J. Kallis", team: "GCP", role: "FAR" },
{ id: 156, name: "Madhu", team: "GCP", role: "FAR" },
{ id: 157, name: "Bhuvneshwar", team: "GCP", role: "FAR" },
{ id: 158, name: "Campher", team: "GCP", role: "FAR" },
{ id: 159, name: "Holder", team: "GCP", role: "FAR" },

{ id: 160, name: "Mohit", team: "GCP", role: "FB" },

{ id: 161, name: "Digvesh", team: "GCP", role: "SB" },
{ id: 162, name: "M. Ghazanfar", team: "GCP", role: "SB" },
// TDR
{ id: 163, name: "Pujara", team: "TDR", role: "BAT" },
{ id: 164, name: "Gayle", team: "TDR", role: "BAT" },
{ id: 165, name: "Deva", team: "TDR", role: "BAT" },
{ id: 166, name: "Miller", team: "TDR", role: "BAT" },
{ id: 167, name: "D. Mitchell", team: "TDR", role: "BAT" },

{ id: 168, name: "Klaasen", team: "TDR", role: "WK" },
{ id: 169, name: "J. Inglis", team: "TDR", role: "WK" },

{ id: 170, name: "Hardik", team: "TDR", role: "FAR" },
{ id: 171, name: "K. Jamieson", team: "TDR", role: "FAR" },
{ id: 172, name: "Sai Varun", team: "TDR", role: "FAR" },
{ id: 173, name: "Cummins", team: "TDR", role: "FAR" },

{ id: 174, name: "J. Root", team: "TDR", role: "SAR" },
{ id: 175, name: "W. Sundar", team: "TDR", role: "SAR" },
{ id: 176, name: "R. Ashwin", team: "TDR", role: "SAR" },

{ id: 177, name: "Pathirana", team: "TDR", role: "FB" },
{ id: 178, name: "Burger", team: "TDR", role: "FB" },
{ id: 179, name: "Rabada", team: "TDR", role: "FB" },

{ id: 180, name: "Noor", team: "TDR", role: "SB" }
]

export default players