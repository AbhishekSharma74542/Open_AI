import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '../store/RootReducer'
import type { AppDispatch } from '../store'

const result = {
  "clustered_sentences": {
    "0": [
      "A unit of work performed as part of an initiative or process",
      "The human and nonhuman roles that interact with a system",
      "Ability of a configuration item or IT service to perform its function when required.",
      "An overall corporate entity or organization formed of a number of business units.",
      "A practitioner of business analysis.",
      "An assessment of the costs and benefits associated with a proposed initiative.",
      "A state or condition the business must satisfy to reach its vision.",
      "A process that is owned and carried out by the business. Contributes to the delivery of a product or service to a business customer.",
      "A constraint, procedure, or directive that governs an aspect of the business.",
      "A function of an organization that enables it to achieve a business goal or objective.",
      "A small group of stakeholders who will make decisions regarding the disposition and treatment of changing requirements.",
      "A document that lists all approved changes and their planned implementation dates.",
      "Application software or middleware that can be purchased from a third party.",
      "A stakeholder who uses products or services delivered by an organization."
    ],
    "1": [
      "Active Listening is a method used to listen and respond to others in a structured and deliberate way. It requires a listener to understand and actively evaluate what he or she heard.",
      "Agile is a general term and conceptual framework used to describe a number of \u201clight-weight\u201d methodologies, such as Extreme Programming (XP), SCRUM, Kanban, and Rapid Application Development (RAD), which exhibit a series of common characteristics. Some of these characteristics include iterative analysis and development, time-boxed iterations of a predefined length, delivery of the most critical features and functions first, delivery of a complete build with an initial set of limited features within a few months (often 1-2 months), small cross-functional teams usually of 6-9 team members, daily team communication meetings, and reduced levels of documentation.",
      "A set of attitudes supporting an agile working environment; respect, collaboration, improvement, and learning cycles.",
      "An alternate flow describes a use case scenario other than the basic flow that results in a user completing his or her goal. It is often considered to be an optional flow and implies that the user has chosen to take an alternative path through the system.",
      "To formulate a model of the problem that is independent of implementation considerations. In short, Analysis focuses on what to do, while design focuses on how to do it.",
      "A generic name for a role with the responsibilities of developing and managing requirements. Other names include business analyst, business integrator, requirements analyst, requirements engineer, and systems analyst.",
      "Assumptions are influencing factors that are believed to be true but have not been confirmed to be accurate.",
      "Formal inspection and verification to check whether a standard or set of guidelines are being followed, that records are accurate, or that efficiency and effectiveness targets are being met.",
      "The review of the Product Backlog to ensure it contains the right items (user stories), the items have enough detail to be worked, and the items are prioritized.",
      "A point-in-time view of requirements that have been reviewed and agreed upon to serve as a basis for further development.",
      "A comparison of a process or system\u2019s cost, time, quality, or other metrics to those of leading peer organizations to identify opportunities for improvement.",
      "Brainstorming is a team activity that seeks to produce a broad or diverse set of options through the rapid and uncritical generation of ideas.",
      "Used to track the progress of work completed versus the total work (project scope). The burn-up chart gives a quick view of the amount of work that is completed versus the total amount of work needing to be completed.",
      "Used to track the progress of work completed. It compares the amount of work remaining (typically measured along the vertical axis) against time (measured along the horizontal axis). The burndown chart gives a quick view of the amount of work that is completed over time.",
      "Business analysis is the set of tasks and techniques used to work as a liaison among stakeholders in order to understand the structure, policies and operations of an organization, and recommend solutions that enable the organization to achieve its goals.",
      "A document that describes and defines business analysis as a discipline, rather than define the responsibilities of a person with the job title of Business Analyst. These derived standards are the opinion of the International Institute for Business Analysis (IIBA).",
      "Describes how a business analyst determines which activities will be needed to complete the business analysis effort. The tasks within this knowledge area govern the business analysis tasks in all of the other knowledge areas.",
      "Business constraints are limitations placed on the solution design by the organization that needs the solution. Business constraints describe limitations on available solutions or an aspect of the current state that cannot be changed by the deployment of the new solution. See also technical constraint.",
      "A type of high-level business requirement that is a statement of a business objective, or an impact the solution should have on its environment.",
      "A higher level business rationale that, when addressed, will permit the organization to increase revenue, avoid costs, improve service, or meet regulatory requirements.",
      "A Business Requirements Document is a requirements package that describes business requirements and stakeholder requirements (it documents requirements of interest to the business, rather than documenting business requirements).",
      "A segment of the business that has its own plans, metrics, income, and costs. Each business unit owns assets and uses these to create value for customers in the form of goods and services.",
      "The maximum throughput that a configuration item or IT service can deliver whilst meeting agreed service level targets.",
      "The Certification of Competency in Business Analysis (CCBA) is the designation given to those professionals who sit for and pass the CCBA exam. The CCBA is an intermediate stepping stone for those business analysts who do not meet the more stringent requirements of the CBAP.",
      "The Certified Business Analysis Professional certification (CBAP certification) is the designation given to those professionals who sit for and pass the CBAP exam. For this reason, the term CBAP is often used as a shorthand term to refer to the CBAP exam itself.",
      "The addition, modification, or removal of anything that could have an effect on IT services. The scope should include all IT services, configuration items, processes, and documents.",
      "A methodology that focuses on rapid delivery of solution capabilities in an incremental fashion and direct involvement of stakeholders to gather feedback on the solution's performance.",
      "A quality control technique. They may include a standard set of quality elements that reviewers use for requirements verification and requirements validation or be specifically developed to capture issues of concern to the project.",
      "A structured process which captures the key characteristics of an industry to predict the long-term profitability prospects and to determine the practices of the most significant competitors.",
      "Concentration Ratio (CR) is a measurement used to understand the level of competition that exists within a market or industry in which a company operates.",
      "A constraint describes any limitations imposed on the solution that do not support the business or stakeholder needs.",
      "Convergent thinking is the process of focusing on a few sets of ideas and evaluating them based on selection criteria in order to narrow down the available options.",
      "Cost Benefit Analysis is a technique used to determine if the financial benefits of a project outweigh the associated cost of undertaking the project in the first place. For a short term project where the benefit may be an immediate one-time cash windfall, this may be as simple as subtracting the total of all project costs from the total of all project benefits. If the total is positive, then the project may be worth completing.",
      "Something that must happen if a process, project, plan, or IT service is to succeed. Key Performance Indicators are often used to measure the achievement level of the Critical Success Factor"
    ],
    "2": [
      "An activity diagram is a UML diagram that is used to model a process. It models the actions (or behaviors) performed by the components of a business process or IT system, the order in which the actions take place, and the conditions that coordinate the actions in a specific order. Activity diagrams use swim lanes to group actions together. Actions can be grouped by the actor performing the action or by the distinct business process or system that is performing the action.",
      "The structure of a system or IT service, including the relationship of components to each other and to the environment they are in.",
      "A link between two elements or objects in a diagram.",
      "A data element with a specified data type that describes information associated with a concept or entity.",
      "A business entity model is a logical model that documents the entities, or things, that a business or business process uses and interacts with in order to accomplish its business activities and goals. In addition to documenting entities, a business entity model may capture the attributes of an entity, relationships between entities, and cardinality information. Many business entity models are created in the form of a UML class diagram.",
      "Provides a syntax for notation that can be fundamentally understood by all business users, business analysts, and technical developers.",
      "The number of occurrences of one entity in a data model that is linked to a second entity. Cardinality is shown on a data model with a special notation, number (e.g., 1), or letter (e.g., M for many).",
      "See fishbone diagram.",
      "A descriptor for a set of system objects that share the same attributes, operations, relationships, and behavior. A class represents a concept in the system under design. When used as an analysis model, a class will generally also correspond to a real-world entity.",
      "A class diagram is a UML diagram that describes the structure of a system by showing the classes of a system, the attributes and operations that belong to each class, and the relationships between the classes.",
      "A type of data model that depicts information groups as classes.",
      "A system of programming statements, symbols, and rules used to represent instructions to a computer.",
      "A communication diagram is a UML 2.0 diagram which models the objects or parts of a system, the interactions (or messages) between them, and the sequence in which these interactions occur. A communication diagram models this as a free-form arrangement of objects or parts of a system. The free-form arrangement of objects lends itself well to showing the sequenced interactions in a more compact space.",
      "A context diagram is a special form of a data flow diagram that represents an entire system as a single process and highlights the interactions between the system being analyzed and other systems or people that interact with it.",
      "CRUD stands for: Create, Read, Update, Delete. These are the four basic functions that can be performed when working with data in persistent storage."
    ]
  }
}

export const fetchClusterData: any = createAsyncThunk<
  any,
  any,
  {
    dispatch: AppDispatch
    state: RootState
  }
>(
  'fetchClusterData',
  async (params = {}, {rejectWithValue }) => {
    try {
      return result
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
