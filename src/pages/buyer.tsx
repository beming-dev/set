import React, { useEffect, useState } from "react";
import axios from "axios";
import { IBuyerAlias } from "../services/models/buyer.schema";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const LoadingSpinner = () => {
  // 로딩 스피너와 텍스트를 표시하는 로딩 컴포넌트
  const spinnerStyle: React.CSSProperties = {
    border: "8px solid rgba(0, 0, 0, 0.1)",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
    marginBottom: "16px",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column", // 수정: string 대신 'column'과 같은 정확한 값 사용
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  };

  const textStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 500,
    color: "#333",
  };

  // keyframes 애니메이션 추가
  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={containerStyle}>
      {/* 애니메이션을 위해 style 태그를 동적으로 추가 */}
      <style>{keyframesStyle}</style>
      <div style={spinnerStyle}></div>
      <p style={textStyle}>Loading...</p>
    </div>
  );
};

const BuyerForm = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [formData, setFormData] = useState<Partial<IBuyerAlias>>({
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

  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState(false);

  useEffect(() => {
    if (session && session.user) {
      const result = axios
        .get(`/api/buyer?userId=${session.user.id}`)
        .then(({ data }) => {
          if (data.data) {
            setFormData({
              ...data.data,
              revenue: data.data.revenue * 100000,
              valuation: data.data.valuation * 100000,
              profitMargins: data.data.profitMargins * 100000,
            });
          } else {
            setExist(false);
          }
        });
    }
  }, [session]);

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
    if (!session) {
      alert("you need to login");
      router.push("/login");
      return;
    }

    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const res = await axios.post(`/api/buyer`, {
        data: formData,
        userId: session.user.id,
      });

      const result = res.data.id;
      router.push(`/matching?id=${result}`);
    } catch (err) {
      console.log("false");
    }

    setLoading(false);
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
      {loading && <LoadingSpinner />}
      <label>Available Capital(€):</label>
      <input
        type="number"
        name="availableCapital"
        value={formData.availableCapital}
        onChange={handleChange}
        placeholder="Available Capital"
        readOnly={exist ? true : false}
      />

      <label>Revenue(€):</label>
      <input
        type="number"
        name="revenue"
        value={formData.revenue}
        onChange={handleChange}
        placeholder="Revenue"
        readOnly={exist ? true : false}
      />

      <label>Valuation(€):</label>
      <input
        type="number"
        name="valuation"
        value={formData.valuation}
        onChange={handleChange}
        placeholder="Valuation"
        readOnly={exist ? true : false}
      />

      <label>Profit Margins(€):</label>
      <input
        type="number"
        name="profitMargins"
        value={formData.profitMargins}
        onChange={handleChange}
        placeholder="Profit Margins"
        readOnly={exist ? true : false}
      />

      <label>Industry:</label>
      <input
        type="text"
        name="industry"
        value={formData.industry}
        onChange={handleChange}
        placeholder="Industry"
        readOnly={exist ? true : false}
      />

      <label>GeographicLocation:</label>
      <input
        type="text"
        name="geographicLocation"
        value={formData.geographicLocation}
        onChange={handleChange}
        placeholder="GeographicLocation"
        readOnly={exist ? true : false}
      />

      <label>Access to Financing:</label>
      <input
        type="text"
        name="accessToFinancing"
        value={formData.accessToFinancing}
        onChange={handleChange}
        placeholder="Access to Financing"
        readOnly={exist ? true : false}
      />

      <label>Previous Investment Performance:</label>
      <input
        type="text"
        name="previousInvestmentPerformance"
        value={formData.previousInvestmentPerformance}
        onChange={handleChange}
        placeholder="Previous Investment Performance"
        readOnly={exist ? true : false}
      />

      <label>Industry Experience:</label>
      <input
        type="text"
        name="industryExperience"
        value={formData.industryExperience}
        onChange={handleChange}
        placeholder="Industry Experience"
        readOnly={exist ? true : false}
      />

      <label>Strategic Vision Alignment:</label>
      <input
        type="text"
        name="strategicVisionAlignment"
        value={formData.strategicVisionAlignment}
        onChange={handleChange}
        placeholder="Strategic Vision Alignment"
        readOnly={exist ? true : false}
      />

      <label>Operational Involvement Preferences:</label>
      <input
        type="text"
        name="operationalInvolvementPreferences"
        value={formData.operationalInvolvementPreferences}
        onChange={handleChange}
        placeholder="Operational Involvement Preferences"
        readOnly={exist ? true : false}
      />

      <label>Technological & Innovation Capabilities:</label>
      <input
        type="text"
        name="technologicalAndInnovationCapabilities"
        value={formData.technologicalAndInnovationCapabilities}
        onChange={handleChange}
        placeholder="Technological & Innovation Capabilities"
        readOnly={exist ? true : false}
      />

      <label>Leadership Style:</label>
      <input
        type="text"
        name="leadershipStyle"
        value={formData.leadershipStyle}
        onChange={handleChange}
        placeholder="Leadership Style"
        readOnly={exist ? true : false}
      />

      <label>Management Experience:</label>
      <input
        type="text"
        name="managementExperience"
        value={formData.managementExperience}
        onChange={handleChange}
        placeholder="Management Experience"
        readOnly={exist ? true : false}
      />

      <label>Management Style:</label>
      <input
        type="text"
        name="managementStyle"
        value={formData.managementStyle}
        onChange={handleChange}
        placeholder="Management Style"
        readOnly={exist ? true : false}
      />

      <label>Cultural Fit:</label>
      <input
        type="text"
        name="culturalFit"
        value={formData.culturalFit}
        onChange={handleChange}
        placeholder="Cultural Fit"
        readOnly={exist ? true : false}
      />

      <label>Strategic Vision:</label>
      <input
        type="text"
        name="strategicVision"
        value={formData.strategicVision}
        onChange={handleChange}
        placeholder="Strategic Vision"
        readOnly={exist ? true : false}
      />

      <label>Communication Style:</label>
      <input
        type="text"
        name="communicationStyle"
        value={formData.communicationStyle}
        onChange={handleChange}
        placeholder="Communication Style"
        readOnly={exist ? true : false}
      />

      <label>Communication Frequency:</label>
      <input
        type="text"
        name="communicationFrequency"
        value={formData.communicationFrequency}
        onChange={handleChange}
        placeholder="Communication Frequency"
        readOnly={exist ? true : false}
      />

      <label>Ethical Standards:</label>
      <input
        type="text"
        name="ethicalStandards"
        value={formData.ethicalStandards}
        onChange={handleChange}
        placeholder="Ethical Standards"
        readOnly={exist ? true : false}
      />

      <label>Decision-Making Process:</label>
      <input
        type="text"
        name="decisionMakingProcess"
        value={formData.decisionMakingProcess}
        onChange={handleChange}
        placeholder="Decision-Making Process"
        readOnly={exist ? true : false}
      />

      <label>Conflict Resolution:</label>
      <input
        type="text"
        name="conflictResolution"
        value={formData.conflictResolution}
        onChange={handleChange}
        placeholder="Conflict Resolution"
        readOnly={exist ? true : false}
      />

      <label>Growth Objectives:</label>
      <input
        type="text"
        name="growthObjectives"
        value={formData.growthObjectives}
        onChange={handleChange}
        placeholder="Growth Objectives"
        readOnly={exist ? true : false}
      />

      <label>Market Expansion Plans:</label>
      <input
        type="text"
        name="marketExpansionPlans"
        value={formData.marketExpansionPlans}
        onChange={handleChange}
        placeholder="Market Expansion Plans"
        readOnly={exist ? true : false}
      />

      <label>Innovation & Technology Plans:</label>
      <input
        type="text"
        name="innovationAndTechnologyPlans"
        value={formData.innovationAndTechnologyPlans}
        onChange={handleChange}
        placeholder="Innovation & Technology Plans"
        readOnly={exist ? true : false}
      />

      <label>Stakeholder Management Skills:</label>
      <input
        type="text"
        name="stakeholderManagementSkills"
        value={formData.stakeholderManagementSkills}
        onChange={handleChange}
        placeholder="Stakeholder Management Skills"
        readOnly={exist ? true : false}
      />

      <label>Customer & Supplier Relationship Strategies:</label>
      <input
        type="text"
        name="customerAndSupplierRelationshipStrategies"
        value={formData.customerAndSupplierRelationshipStrategies}
        onChange={handleChange}
        placeholder="Customer & Supplier Relationship Strategies"
        readOnly={exist ? true : false}
      />

      <label>Employee Management & Retention Strategies:</label>
      <input
        type="text"
        name="employeeManagementAndRetentionStrategies"
        value={formData.employeeManagementAndRetentionStrategies}
        onChange={handleChange}
        placeholder="Employee Management & Retention Strategies"
        readOnly={exist ? true : false}
      />

      <label>Willingness to Follow Existing Transition Plans:</label>
      <input
        type="text"
        name="willingnessToFollowExistingTransitionPlans"
        value={formData.willingnessToFollowExistingTransitionPlans}
        onChange={handleChange}
        placeholder="Willingness to Follow Existing Transition Plans"
        readOnly={exist ? true : false}
      />

      <label>Plans for Owner Involvement:</label>
      <input
        type="text"
        name="plansForOwnerInvolvement"
        value={formData.plansForOwnerInvolvement}
        onChange={handleChange}
        placeholder="Plans for Owner Involvement"
        readOnly={exist ? true : false}
      />

      <label>Readiness for Cultural Integration:</label>
      <input
        type="text"
        name="readinessForCulturalIntegration"
        value={formData.readinessForCulturalIntegration}
        onChange={handleChange}
        placeholder="Readiness for Cultural Integration"
        readOnly={exist ? true : false}
      />

      <label>Buyer's Story:</label>
      <textarea
        name="buyersStory"
        value={formData.buyersStory}
        onChange={handleChange}
        placeholder="Buyer's Story"
        readOnly={exist ? true : false}
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
