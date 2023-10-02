import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

const prePopulatedData = [
  {
    Term: "Accessibility",
    text: "Active Listening is a method used to listen and respond to others in a structured and deliberate way. It requires a listener to understand and actively evaluate what he or she heard.",
  },
  {
    Term: "Activity",
    text: "A unit of work performed as part of an initiative or process",
  },
  {
    Term: "Activity Diagram",
    text: "An activity diagram is a UML diagram that is used to model a process. It models the actions (or behaviors) performed by the components of a business process or IT system, the order in which the actions take place, and the conditions that coordinate the actions in a specific order. Activity diagrams use swim lanes to group actions together. Actions can be grouped by the actor performing the action or by the distinct business process or system that is performing the action.",
  },
  {
    Term: "Actor",
    text: "The human and nonhuman roles that interact with a system",
  },
  {
    Term: "Agile",
    text: "Agile is a general term and conceptual framework used to describe a number of \u201clight-weight\u201d methodologies, such as Extreme Programming (XP), SCRUM, Kanban, and Rapid Application Development (RAD), which exhibit a series of common characteristics. Some of these characteristics include iterative analysis and development, time-boxed iterations of a predefined length, delivery of the most critical features and functions first, delivery of a complete build with an initial set of limited features within a few months (often 1-2 months), small cross-functional teams usually of 6-9 team members, daily team communication meetings, and reduced levels of documentation.",
  },
  {
    Term: "Agile Mindset",
    text: "A set of attitudes supporting an agile working environment; respect, collaboration, improvement, and learning cycles.",
  },
  {
    Term: "Alternative Flow",
    text: "An alternate flow describes a use case scenario other than the basic flow that results in a user completing his or her goal. It is often considered to be an optional flow and implies that the user has chosen to take an alternative path through the system.",
  },
  {
    Term: "Analysis",
    text: "To formulate a model of the problem that is independent of implementation considerations. In short, Analysis focuses on what to do, while design focuses on how to do it.",
  },
  {
    Term: "Analyst",
    text: "A generic name for a role with the responsibilities of developing and managing requirements. Other names include business analyst, business integrator, requirements analyst, requirements engineer, and systems analyst.",
  },
  {
    Term: "Architecture",
    text: "The structure of a system or IT service, including the relationship of components to each other and to the environment they are in.",
  },
  {
    Term: "Association",
    text: "A link between two elements or objects in a diagram.",
  },
  {
    Term: "Assumption",
    text: "Assumptions are influencing factors that are believed to be true but have not been confirmed to be accurate.",
  },
  {
    Term: "Attribute",
    text: "A data element with a specified data type that describes information associated with a concept or entity.",
  },
  {
    Term: "Audit",
    text: "Formal inspection and verification to check whether a standard or set of guidelines are being followed, that records are accurate, or that efficiency and effectiveness targets are being met.",
  },
  {
    Term: "Availability",
    text: "Ability of a configuration item or IT service to perform its function when required.",
  },
  {
    Term: "Backlog Grooming",
    text: "The review of the Product Backlog to ensure it contains the right items (user stories), the items have enough detail to be worked, and the items are prioritized.",
  },
  {
    Term: "Baseline",
    text: "A point-in-time view of requirements that have been reviewed and agreed upon to serve as a basis for further development.",
  },
  {
    Term: "Benchmarking",
    text: "A comparison of a process or system\u2019s cost, time, quality, or other metrics to those of leading peer organizations to identify opportunities for improvement.",
  },
  {
    Term: "Brainstorming",
    text: "Brainstorming is a team activity that seeks to produce a broad or diverse set of options through the rapid and uncritical generation of ideas.",
  },
  {
    Term: "Burn -Up Chart",
    text: "Used to track the progress of work completed versus the total work (project scope). The burn-up chart gives a quick view of the amount of work that is completed versus the total amount of work needing to be completed.",
  },
  {
    Term: "Burndown Chart",
    text: "Used to track the progress of work completed. It compares the amount of work remaining (typically measured along the vertical axis) against time (measured along the horizontal axis). The burndown chart gives a quick view of the amount of work that is completed over time.",
  },
  {
    Term: "Business",
    text: "An overall corporate entity or organization formed of a number of business units.",
  },
  {
    Term: "Business Analysis",
    text: "Business analysis is the set of tasks and techniques used to work as a liaison among stakeholders in order to understand the structure, policies and operations of an organization, and recommend solutions that enable the organization to achieve its goals.",
  },
  {
    Term: "Business Analysis Body of Knowledge (BABOK)",
    text: "A document that describes and defines business analysis as a discipline, rather than define the responsibilities of a person with the job title of Business Analyst. These derived standards are the opinion of the International Institute for Business Analysis (IIBA).",
  },
  {
    Term: "Business Analysis Planning and Monitoring",
    text: "Describes how a business analyst determines which activities will be needed to complete the business analysis effort. The tasks within this knowledge area govern the business analysis tasks in all of the other knowledge areas.",
  },
  { Term: "Business Analyst", text: "A practitioner of business analysis." },
  {
    Term: "Business Case",
    text: "An assessment of the costs and benefits associated with a proposed initiative.",
  },
  {
    Term: "Business Constraints",
    text: "Business constraints are limitations placed on the solution design by the organization that needs the solution. Business constraints describe limitations on available solutions or an aspect of the current state that cannot be changed by the deployment of the new solution. See also technical constraint.",
  },
  {
    Term: "Business Entity Model",
    text: "A business entity model is a logical model that documents the entities, or things, that a business or business process uses and interacts with in order to accomplish its business activities and goals. In addition to documenting entities, a business entity model may capture the attributes of an entity, relationships between entities, and cardinality information. Many business entity models are created in the form of a UML class diagram.",
  },
  {
    Term: "Business Goal",
    text: "A state or condition the business must satisfy to reach its vision.",
  },
  {
    Term: "Business Needs",
    text: "A type of high-level business requirement that is a statement of a business objective, or an impact the solution should have on its environment.",
  },
  {
    Term: "Business Process",
    text: "A process that is owned and carried out by the business. Contributes to the delivery of a product or service to a business customer.",
  },
  {
    Term: "Business Process Modeling Notation (BPMN)",
    text: "Provides a syntax for notation that can be fundamentally understood by all business users, business analysts, and technical developers.",
  },
  {
    Term: "Business Requirement",
    text: "A higher level business rationale that, when addressed, will permit the organization to increase revenue, avoid costs, improve service, or meet regulatory requirements.",
  },
  {
    Term: "Business Requirement Document (BRD)",
    text: "A Business Requirements Document is a requirements package that describes business requirements and stakeholder requirements (it documents requirements of interest to the business, rather than documenting business requirements).",
  },
  {
    Term: "Business Rule",
    text: "A constraint, procedure, or directive that governs an aspect of the business.",
  },
  {
    Term: "Business Unit",
    text: "A segment of the business that has its own plans, metrics, income, and costs. Each business unit owns assets and uses these to create value for customers in the form of goods and services.",
  },
  {
    Term: "Capability",
    text: "A function of an organization that enables it to achieve a business goal or objective.",
  },
  {
    Term: "Capacity",
    text: "The maximum throughput that a configuration item or IT service can deliver whilst meeting agreed service level targets.",
  },
  {
    Term: "Cardinality",
    text: "The number of occurrences of one entity in a data model that is linked to a second entity. Cardinality is shown on a data model with a special notation, number (e.g., 1), or letter (e.g., M for many).",
  },
  { Term: "Cause and Effect Diagram", text: "See fishbone diagram." },
  {
    Term: "Certification of Competency in Business Analysis (CCBA)",
    text: "The Certification of Competency in Business Analysis (CCBA) is the designation given to those professionals who sit for and pass the CCBA exam. The CCBA is an intermediate stepping stone for those business analysts who do not meet the more stringent requirements of the CBAP.",
  },
  {
    Term: "Certified Business Analysis Professional (CBAP)",
    text: "The Certified Business Analysis Professional certification (CBAP certification) is the designation given to those professionals who sit for and pass the CBAP exam. For this reason, the term CBAP is often used as a shorthand term to refer to the CBAP exam itself.",
  },
  {
    Term: "Change",
    text: "The addition, modification, or removal of anything that could have an effect on IT services. The scope should include all IT services, configuration items, processes, and documents.",
  },
  {
    Term: "Change Control Board (CCB)",
    text: "A small group of stakeholders who will make decisions regarding the disposition and treatment of changing requirements.",
  },
  {
    Term: "Change Schedule",
    text: "A document that lists all approved changes and their planned implementation dates.",
  },
  {
    Term: "Change-driven Methodology",
    text: "A methodology that focuses on rapid delivery of solution capabilities in an incremental fashion and direct involvement of stakeholders to gather feedback on the solution's performance.",
  },
  {
    Term: "Checklist",
    text: "A quality control technique. They may include a standard set of quality elements that reviewers use for requirements verification and requirements validation or be specifically developed to capture issues of concern to the project.",
  },
  {
    Term: "Class",
    text: "A descriptor for a set of system objects that share the same attributes, operations, relationships, and behavior. A class represents a concept in the system under design. When used as an analysis model, a class will generally also correspond to a real-world entity.",
  },
  {
    Term: "Class Diagram",
    text: "A class diagram is a UML diagram that describes the structure of a system by showing the classes of a system, the attributes and operations that belong to each class, and the relationships between the classes.",
  },
  {
    Term: "Class Model",
    text: "A type of data model that depicts information groups as classes.",
  },
  {
    Term: "Code",
    text: "A system of programming statements, symbols, and rules used to represent instructions to a computer.",
  },
  {
    Term: "Commercial-off-the-Shelf (COTS)",
    text: "Application software or middleware that can be purchased from a third party.",
  },
  {
    Term: "Communication Diagram",
    text: "A communication diagram is a UML 2.0 diagram which models the objects or parts of a system, the interactions (or messages) between them, and the sequence in which these interactions occur. A communication diagram models this as a free-form arrangement of objects or parts of a system. The free-form arrangement of objects lends itself well to showing the sequenced interactions in a more compact space.",
  },
  {
    Term: "Competitive Analysis",
    text: "A structured process which captures the key characteristics of an industry to predict the long-term profitability prospects and to determine the practices of the most significant competitors.",
  },
  {
    Term: "Concentration Ratio",
    text: "Concentration Ratio (CR) is a measurement used to understand the level of competition that exists within a market or industry in which a company operates.",
  },
  {
    Term: "Constraint",
    text: "A constraint describes any limitations imposed on the solution that do not support the business or stakeholder needs.",
  },
  {
    Term: "Context Diagram",
    text: "A context diagram is a special form of a data flow diagram that represents an entire system as a single process and highlights the interactions between the system being analyzed and other systems or people that interact with it.",
  },
  {
    Term: "Convergent Thinking",
    text: "Convergent thinking is the process of focusing on a few sets of ideas and evaluating them based on selection criteria in order to narrow down the available options.",
  },
  {
    Term: "Cost-Benefit Analysis",
    text: "Cost Benefit Analysis is a technique used to determine if the financial benefits of a project outweigh the associated cost of undertaking the project in the first place. For a short term project where the benefit may be an immediate one-time cash windfall, this may be as simple as subtracting the total of all project costs from the total of all project benefits. If the total is positive, then the project may be worth completing.",
  },
  {
    Term: "Critical Success Factor (CSF)",
    text: "Something that must happen if a process, project, plan, or IT service is to succeed. Key Performance Indicators are often used to measure the achievement level of the Critical Success Factor",
  },
  {
    Term: "CRUD",
    text: "CRUD stands for: Create, Read, Update, Delete. These are the four basic functions that can be performed when working with data in persistent storage.",
  },
  {
    Term: "Customer",
    text: "A stakeholder who uses products or services delivered by an organization.",
  },
];
const StepOne = () => {
  const [data, setData] = useState([]);

  function greetUser() {
    // fetch("http://127.0.0.1:5000")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setData(json);
    //   });
    setData(prePopulatedData);
  }

  return (
    <Box sx={{ pb: 8 }} onClick={() => greetUser()}>
      <Typography variant="overline" display="block" gutterBottom>
        Step 1: Click to create the embeddings
      </Typography>
      <Button variant="outlined">create embeddings</Button>
    </Box>
  );
};

export default StepOne;
