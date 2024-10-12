import mongoose, { Schema, model, Document } from "mongoose";

export interface IBuyerAlias {
  userId: string;
  buyerNumber?: number;
  availableCapital?: number;
  accessToFinancing?: string;
  previousInvestmentPerformance?: string;
  industryExperience?: string;
  strategicVisionAlignment?: string;
  operationalInvolvementPreferences?: string;
  technologicalAndInnovationCapabilities?: string;
  leadershipStyle?: string;
  managementExperience?: string;
  managementStyle?: string;
  culturalFit?: string;
  strategicVision?: string;
  communicationStyle?: string;
  communicationFrequency?: string;
  ethicalStandards?: string;
  decisionMakingProcess?: string;
  conflictResolution?: string;
  growthObjectives?: string;
  marketExpansionPlans?: string;
  innovationAndTechnologyPlans?: string;
  stakeholderManagementSkills?: string;
  customerAndSupplierRelationshipStrategies?: string;
  employeeManagementAndRetentionStrategies?: string;
  willingnessToFollowExistingTransitionPlans?: string;
  plansForOwnerInvolvement?: string;
  readinessForCulturalIntegration?: string;
  buyersStory?: string;
  revenue?: number;
  valuation?: number;
  profitMargins?: number;
  industry: string;
  geographicLocation: string;
}

const BuyerAliasSchema = new Schema<IBuyerAlias>(
  {
    userId: { type: String },
    buyerNumber: { type: Number },
    availableCapital: { type: Number },
    accessToFinancing: { type: String },
    previousInvestmentPerformance: { type: String },
    industryExperience: { type: String },
    strategicVisionAlignment: { type: String },
    operationalInvolvementPreferences: { type: String },
    technologicalAndInnovationCapabilities: { type: String },
    leadershipStyle: { type: String },
    managementExperience: { type: String },
    managementStyle: { type: String },
    culturalFit: { type: String },
    strategicVision: { type: String },
    communicationStyle: { type: String },
    communicationFrequency: { type: String },
    ethicalStandards: { type: String },
    decisionMakingProcess: { type: String },
    conflictResolution: { type: String },
    growthObjectives: { type: String },
    marketExpansionPlans: { type: String },
    innovationAndTechnologyPlans: { type: String },
    stakeholderManagementSkills: { type: String },
    customerAndSupplierRelationshipStrategies: { type: String },
    employeeManagementAndRetentionStrategies: { type: String },
    willingnessToFollowExistingTransitionPlans: { type: String },
    plansForOwnerInvolvement: { type: String },
    readinessForCulturalIntegration: { type: String },
    buyersStory: { type: String },
    revenue: { type: Number },
    valuation: { type: Number },
    profitMargins: { type: Number },
    industry: { type: String },
    geographicLocation: { type: String },
  },
  { collection: "buyerAlias" }
);

const BuyerAlias =
  mongoose.models.BuyerAlias || mongoose.model("BuyerAlias", BuyerAliasSchema);

export default BuyerAlias;
