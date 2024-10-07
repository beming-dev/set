import React, { useEffect, useState } from "react";
import axios from "axios";
import { IBuyerAlias } from "../services/models/buyer.schema";
import { useRouter } from "next/router";

const BuyerForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<IBuyerAlias>({
    availableCapital: 500000,
    accessToFinancing: "Nope",
    previousInvestmentPerformance: "Nope",
    industryExperience: "Nope",
    strategicVisionAlignment: "Nope",
    operationalInvolvementPreferences: "Nope",
    technologicalAndInnovationCapabilities: "Nope",
    leadershipStyle: "Nope",
    managementExperience: "Nope",
    managementStyle: "Nope",
    culturalFit: "Nope",
    strategicVision: "Nope",
    communicationStyle: "Nope",
    communicationFrequency: "Nope",
    ethicalStandards: "Nope",
    decisionMakingProcess: "Nope",
    conflictResolution: "Nope",
    growthObjectives: "Nope",
    marketExpansionPlans: "Nope",
    innovationAndTechnologyPlans: "Nope",
    stakeholderManagementSkills: "Nope",
    customerAndSupplierRelationshipStrategies: "Nope",
    employeeManagementAndRetentionStrategies: "Nope",
    willingnessToFollowExistingTransitionPlans: "Nope",
    plansForOwnerInvolvement: "Nope",
    readinessForCulturalIntegration: "Nope",
    buyersStory: "Nope",
    revenue: 400000,
    valuation: 500000,
    profitMargins: 600000,
    industry: "Restaurants",
    geographicLocation: "Amsterdam",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/api/buyer", {
        data: formData,
      });

      router.push(`/matching?id=${result.data.id}`);
    } catch (error) {
      console.error("There was an error submitting the data!", error);
    }
  };

  // useEffect(() => {
  //   try {
  //     axios.get("http://localhost:3000/api/seller");
  //   } catch (error) {
  //     console.error("There was an error submitting the data!", error);
  //   }
  // }, []);
  return (
    <form onSubmit={handleSubmit} className="box">
      <label>Available Capital:</label>
      <input
        type="number"
        name="availableCapital"
        value={formData.availableCapital}
        onChange={handleChange}
        placeholder="Available Capital"
      />

      <label>Access to Financing:</label>
      <input
        type="text"
        name="accessToFinancing"
        value={formData.accessToFinancing}
        onChange={handleChange}
        placeholder="Access to Financing"
      />

      <label>Previous Investment Performance:</label>
      <input
        type="text"
        name="previousInvestmentPerformance"
        value={formData.previousInvestmentPerformance}
        onChange={handleChange}
        placeholder="Previous Investment Performance"
      />

      <label>Industry Experience:</label>
      <input
        type="text"
        name="industryExperience"
        value={formData.industryExperience}
        onChange={handleChange}
        placeholder="Industry Experience"
      />

      <label>Strategic Vision Alignment:</label>
      <input
        type="text"
        name="strategicVisionAlignment"
        value={formData.strategicVisionAlignment}
        onChange={handleChange}
        placeholder="Strategic Vision Alignment"
      />

      <label>Operational Involvement Preferences:</label>
      <input
        type="text"
        name="operationalInvolvementPreferences"
        value={formData.operationalInvolvementPreferences}
        onChange={handleChange}
        placeholder="Operational Involvement Preferences"
      />

      <label>Technological & Innovation Capabilities:</label>
      <input
        type="text"
        name="technologicalAndInnovationCapabilities"
        value={formData.technologicalAndInnovationCapabilities}
        onChange={handleChange}
        placeholder="Technological & Innovation Capabilities"
      />

      <label>Leadership Style:</label>
      <input
        type="text"
        name="leadershipStyle"
        value={formData.leadershipStyle}
        onChange={handleChange}
        placeholder="Leadership Style"
      />

      <label>Management Experience:</label>
      <input
        type="text"
        name="managementExperience"
        value={formData.managementExperience}
        onChange={handleChange}
        placeholder="Management Experience"
      />

      <label>Management Style:</label>
      <input
        type="text"
        name="managementStyle"
        value={formData.managementStyle}
        onChange={handleChange}
        placeholder="Management Style"
      />

      <label>Cultural Fit:</label>
      <input
        type="text"
        name="culturalFit"
        value={formData.culturalFit}
        onChange={handleChange}
        placeholder="Cultural Fit"
      />

      <label>Strategic Vision:</label>
      <input
        type="text"
        name="strategicVision"
        value={formData.strategicVision}
        onChange={handleChange}
        placeholder="Strategic Vision"
      />

      <label>Communication Style:</label>
      <input
        type="text"
        name="communicationStyle"
        value={formData.communicationStyle}
        onChange={handleChange}
        placeholder="Communication Style"
      />

      <label>Communication Frequency:</label>
      <input
        type="text"
        name="communicationFrequency"
        value={formData.communicationFrequency}
        onChange={handleChange}
        placeholder="Communication Frequency"
      />

      <label>Ethical Standards:</label>
      <input
        type="text"
        name="ethicalStandards"
        value={formData.ethicalStandards}
        onChange={handleChange}
        placeholder="Ethical Standards"
      />

      <label>Decision-Making Process:</label>
      <input
        type="text"
        name="decisionMakingProcess"
        value={formData.decisionMakingProcess}
        onChange={handleChange}
        placeholder="Decision-Making Process"
      />

      <label>Conflict Resolution:</label>
      <input
        type="text"
        name="conflictResolution"
        value={formData.conflictResolution}
        onChange={handleChange}
        placeholder="Conflict Resolution"
      />

      <label>Growth Objectives:</label>
      <input
        type="text"
        name="growthObjectives"
        value={formData.growthObjectives}
        onChange={handleChange}
        placeholder="Growth Objectives"
      />

      <label>Market Expansion Plans:</label>
      <input
        type="text"
        name="marketExpansionPlans"
        value={formData.marketExpansionPlans}
        onChange={handleChange}
        placeholder="Market Expansion Plans"
      />

      <label>Innovation & Technology Plans:</label>
      <input
        type="text"
        name="innovationAndTechnologyPlans"
        value={formData.innovationAndTechnologyPlans}
        onChange={handleChange}
        placeholder="Innovation & Technology Plans"
      />

      <label>Stakeholder Management Skills:</label>
      <input
        type="text"
        name="stakeholderManagementSkills"
        value={formData.stakeholderManagementSkills}
        onChange={handleChange}
        placeholder="Stakeholder Management Skills"
      />

      <label>Customer & Supplier Relationship Strategies:</label>
      <input
        type="text"
        name="customerAndSupplierRelationshipStrategies"
        value={formData.customerAndSupplierRelationshipStrategies}
        onChange={handleChange}
        placeholder="Customer & Supplier Relationship Strategies"
      />

      <label>Employee Management & Retention Strategies:</label>
      <input
        type="text"
        name="employeeManagementAndRetentionStrategies"
        value={formData.employeeManagementAndRetentionStrategies}
        onChange={handleChange}
        placeholder="Employee Management & Retention Strategies"
      />

      <label>Willingness to Follow Existing Transition Plans:</label>
      <input
        type="text"
        name="willingnessToFollowExistingTransitionPlans"
        value={formData.willingnessToFollowExistingTransitionPlans}
        onChange={handleChange}
        placeholder="Willingness to Follow Existing Transition Plans"
      />

      <label>Plans for Owner Involvement:</label>
      <input
        type="text"
        name="plansForOwnerInvolvement"
        value={formData.plansForOwnerInvolvement}
        onChange={handleChange}
        placeholder="Plans for Owner Involvement"
      />

      <label>Readiness for Cultural Integration:</label>
      <input
        type="text"
        name="readinessForCulturalIntegration"
        value={formData.readinessForCulturalIntegration}
        onChange={handleChange}
        placeholder="Readiness for Cultural Integration"
      />

      <label>Buyer's Story:</label>
      <textarea
        name="buyersStory"
        value={formData.buyersStory}
        onChange={handleChange}
        placeholder="Buyer's Story"
      />

      <label>Revenue(€):</label>
      <input
        type="number"
        name="revenue"
        value={formData.revenue}
        onChange={handleChange}
        placeholder="Revenue"
      />

      <label>Valuation(€):</label>
      <input
        type="number"
        name="valuation"
        value={formData.valuation}
        onChange={handleChange}
        placeholder="Valuation"
      />

      <label>Profit Margins(€):</label>
      <input
        type="number"
        name="profitMargins"
        value={formData.profitMargins}
        onChange={handleChange}
        placeholder="Profit Margins"
      />

      <label>Industry:</label>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
      />

      <label>GeographicLocation:</label>
      <input
        type="text"
        name="geographicLocation"
        value={formData.geographicLocation}
        onChange={handleChange}
        placeholder="GeographicLocation"
      />

      <button type="submit" className="button">
        Submit
      </button>

      <style jsx>{`
        .box {
          display: flex;
          flex-direction: column;
          padding: 20px 0;
          width: 60%;

          input {
            border: 1px solid black;
            margin: 5px 0;
          }

          textarea {
            border: 1px solid black;
          }

          .button {
            padding: 10px;
            border: 1px solid black;
            margin-top: 20px;
          }
        }
      `}</style>
    </form>
  );
};

export default BuyerForm;
