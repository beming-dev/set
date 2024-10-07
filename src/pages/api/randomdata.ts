// const mongoose = require("mongoose");
// const faker = require("faker");

// const SellerAliasSchema = new mongoose.Schema({
//   // 스키마 정의는 생략, 위와 동일하게 사용
// });

// const SellerAlias = mongoose.model("SellerAlias", SellerAliasSchema);

// // 1000개의 랜덤 데이터 생성
// async function createRandomSellers() {
//   let sellers = [];

//   for (let i = 0; i < 1000; i++) {
//     const seller = new SellerAlias({
//       businessNumber: faker.datatype.number(),
//       businessModel: faker.company.bs(),
//       clients: faker.company.companyName(),
//       valueProposition: faker.company.catchPhrase(),
//       productServiceOfferings: faker.datatype.number(),
//       revenueStreams: faker.finance.accountName(),
//       marketingChannels: faker.company.bsBuzz(),
//       geographicLocation:
//         dutchCities[Math.floor(Math.random() * dutchCities.length)],
//       revenue: faker.datatype.number({ min: 1, max: 10 }),
//       profitMargins: faker.datatype.number({ min: 1, max: 10 }),
//       valuation: faker.finance.amount(),
//       debtToEquityRatio: faker.finance.amount(),
//       cashFlow: faker.finance.amount(),
//       geographicalLocation:
//         dutchCities[Math.floor(Math.random() * dutchCities.length)],
//       historicalPerformance: faker.lorem.sentence(),
//       technologyAndInfrastructure: faker.lorem.sentence(),
//       assetsAndLiabilities: faker.lorem.sentence(),
//       customerBase: faker.company.companyName(),
//       supplierAndVendorRelationships: faker.company.companyName(),
//       marketShare: faker.finance.amount(),
//       brandAndReputation: faker.company.catchPhrase(),
//       industryTrends: faker.company.bs(),
//       competitorStrategies: faker.lorem.sentence(),
//       economicIndicators: faker.lorem.sentence(),
//       regulatoryEnvironment: faker.lorem.sentence(),
//       mediaCoverage: faker.lorem.sentence(),
//       strategicVision: faker.company.bs(),
//       innovationAndTechnologyAdoption: faker.lorem.sentence(),
//       marketExpansionCapability: faker.lorem.sentence(),
//       partnershipsAndAlliances: faker.lorem.sentence(),
//       leadershipStyle: faker.lorem.sentence(),
//       companyCulture: faker.lorem.sentence(),
//       managementStyle: faker.lorem.sentence(),
//       employeeSatisfaction: faker.lorem.sentence(),
//       customerSatisfaction: faker.lorem.sentence(),
//       stakeholderRelationships: faker.lorem.sentence(),
//       ethicalStandards: faker.lorem.sentence(),
//       values: faker.lorem.sentence(),
//       diversityAndInclusion: faker.lorem.sentence(),
//       transitionPlanCompatibility: faker.lorem.sentence(),
//       ownerInvolvement: faker.lorem.sentence(),
//       culturalIntegrationReadiness: faker.lorem.sentence(),
//       sellerStory: faker.lorem.sentence(),
//       communicationStyle: faker.lorem.sentence(),
//       decisionMakingProcess: faker.lorem.sentence(),
//       conflictResolution: faker.lorem.sentence(),
//       communicationFrequency: faker.lorem.sentence(),
//       industry: industries[Math.floor(Math.random() * industries.length)],
//     });

//     sellers.push(seller);
//   }

//   await SellerAlias.insertMany(sellers);
//   console.log("1000명의 셀러 데이터를 성공적으로 추가했습니다.");
// }
