import React from "react";
import {FaEye, FaCodeBranch} from "react-icons/fa";

const DesktopHomeRight = () => (
  <>
    <h2 className="my-4 text-xs font-bold uppercase text-dark-grey">
      Projects
    </h2>
    <div className="darken flex flex-col gap-y-8 md:gap-y-3">
      <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
        <h3 className="text-[1.3rem] font-semibold text-white">
          Concrete Compressive Strength Prediction
        </h3>

        <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
          MACHINE LEARNING · PYTHON · SCIKIT-LEARN · NEURAL NETWORKS
        </p>

        <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Reproducible machine learning system for regression and classification,
          benchmarking classical models and neural networks using modular pipelines
          and MLflow-based experiment tracking.
        </p>

        <div className="flex items-center gap-x-4 my-8">
          <a
            href="https://github.com/Yuusuf396/Concrete-Compressive-Strength-ML-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaCodeBranch /> <span>Source Code</span>
          </a>
          <span className="text-xs text-dark-grey">Case Study Available</span>
        </div>
      </div>

      <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
        <h3 className="text-[1.3rem] font-semibold text-white">Re-Think</h3>
        <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
          DJANGO + REACT + CUSTOM AI ENGINE + DATA VISUALIZATION
        </p>
        <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Full-stack environmental impact tracking platform with custom AI engine. Analyzes sustainability data and generates personalized recommendations for carbon, water, and energy usage. Features interactive dashboards and real-time environmental insights.
        </p>
        <div className="flex items-center gap-x-4 my-8">
          <a
            href="https://github.com/Yuusuf396/Re-Think"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaCodeBranch /> <span>Source Code</span>
          </a>
          <span className="text-xs text-dark-grey">Deployment in Progress</span>
        </div>
      </div>
      <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
        <h3 className="text-[1.3rem] font-semibold text-white">Monopoly Strategy Simulation</h3>
        <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
          JAVA + DJANGO + REACT + PYTHON + MATPLOTLIB + STATISTICAL ANALYSIS
        </p>
        <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Developed a Java-based Monopoly simulator with my project partner to model player strategies and automate 1,000+ games. Implemented Aggressive, Conservative, and Random strategies, tracking wins, properties, and wealth data. Analyzed performance using data structures, algorithms, and statistical analysis to identify the most effective strategy.
        </p>
        <div className="flex items-center gap-x-4 my-8">
          <a
            href="https://monopoly-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaEye /> <span>Live Demo</span>
          </a>
          <a
            href="https://github.com/Yuusuf396/monopoly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaCodeBranch /> <span>Source Code</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-box-bg p-10 transition-all duration-300 md:hover:scale-110">
        <h3 className="text-[1.3rem] font-semibold text-white">Data Science Research Pipeline</h3>
        <p className="mb-3 mt-1 text-xs font-semibold leading-5 tracking-wider text-light-grey">
          R + STATISTICAL ANALYSIS + REGRESSION MODELING + DATA VISUALIZATION + RESEARCH METHODOLOGY
        </p>
        <p className="my-3 min-h-[5rem] text-xs font-semibold tracking-wider text-dark-grey md:h-16">
          Led a team to investigate the relationship between temperature, seasons, and ozone levels using a dataset from New York State (May-September 1973). Modelled ozone levels as a function of temperature and season, interpreting results to assess the significance of explanatory variables. Evaluated model assumptions by analyzing residuals, ensuring robustness of regression results, and identifying potential outliers.
        </p>
        <div className="flex items-center gap-x-4 my-8">
          <a
            href="https://data-science-research-pipeline.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaEye /> <span>Research Report</span>
          </a>
          <a
            href="https://github.com/Yuusuf396/data-science-research-pipeline-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1 text-xs text-light-grey hover:text-white"
          >
            <FaCodeBranch /> <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default DesktopHomeRight;
