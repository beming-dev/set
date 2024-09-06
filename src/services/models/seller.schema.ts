import { Schema, model, Document } from "mongoose";

export interface ISellerAlias extends Document {
  businessNumber?: number;
  businessModel?: string;
  clients?: string;
  valueProposition?: string;
  productServiceOfferings?: number;
  revenueStreams?: string;
  marketingChannels?: string;
  geographicLocation?: string;
  revenue?: number;
  profitMargins?: number;
  valuation?: number;
  debtToEquityRatio?: number;
  cashFlow?: number;
  geographicalLocation?: string;
  historicalPerformance?: string;
  technologyAndInfrastructure?: string;
  assetsAndLiabilities?: string;
  customerBase?: string;
  supplierAndVendorRelationships?: string;
  marketShare?: string;
  brandAndReputation?: string;
  industryTrends?: string;
  competitorStrategies?: string;
  economicIndicators?: string;
  regulatoryEnvironment?: string;
  mediaCoverage?: string;
  strategicVision?: string;
  innovationAndTechnologyAdoption?: string;
  marketExpansionCapability?: string;
  partnershipsAndAlliances?: string;
  leadershipStyle?: string;
  companyCulture?: string;
  managementStyle?: string;
  employeeSatisfaction?: string;
  customerSatisfaction?: string;
  stakeholderRelationships?: string;
  ethicalStandards?: string;
  values?: string;
  diversityAndInclusion?: string;
  transitionPlanCompatibility?: string;
  ownerInvolvement?: string;
  culturalIntegrationReadiness?: string;
  sellerStory?: string;
  communicationStyle?: string;
  decisionMakingProcess?: string;
  conflictResolution?: string;
  communicationFrequency?: string;
  industry: string;
}

const SellerAliasSchema = new Schema<ISellerAlias>(
  {
    businessNumber: { type: Number },
    businessModel: { type: String },
    clients: { type: String },
    valueProposition: { type: String },
    productServiceOfferings: { type: Number },
    revenueStreams: { type: String },
    marketingChannels: { type: String },
    geographicLocation: { type: String },
    revenue: { type: Number },
    profitMargins: { type: Number },
    valuation: { type: Number },
    debtToEquityRatio: { type: Number },
    cashFlow: { type: Number },
    geographicalLocation: { type: String },
    historicalPerformance: { type: String },
    technologyAndInfrastructure: { type: String },
    assetsAndLiabilities: { type: String },
    customerBase: { type: String },
    supplierAndVendorRelationships: { type: String },
    marketShare: { type: String },
    brandAndReputation: { type: String },
    industryTrends: { type: String },
    competitorStrategies: { type: String },
    economicIndicators: { type: String },
    regulatoryEnvironment: { type: String },
    mediaCoverage: { type: String },
    strategicVision: { type: String },
    innovationAndTechnologyAdoption: { type: String },
    marketExpansionCapability: { type: String },
    partnershipsAndAlliances: { type: String },
    leadershipStyle: { type: String },
    companyCulture: { type: String },
    managementStyle: { type: String },
    employeeSatisfaction: { type: String },
    customerSatisfaction: { type: String },
    stakeholderRelationships: { type: String },
    ethicalStandards: { type: String },
    values: { type: String },
    diversityAndInclusion: { type: String },
    transitionPlanCompatibility: { type: String },
    ownerInvolvement: { type: String },
    culturalIntegrationReadiness: { type: String },
    sellerStory: { type: String },
    communicationStyle: { type: String },
    decisionMakingProcess: { type: String },
    conflictResolution: { type: String },
    communicationFrequency: { type: String },
    industry: { type: String },
  },
  { collection: "sellerAlias" }
);

const SellerAlias = model<ISellerAlias>("SellerAlias", SellerAliasSchema);

export default SellerAlias;
