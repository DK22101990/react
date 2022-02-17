import React, { useEffect, useState } from 'react';
import axios from "../axiosCalls";
import Header from '../components/UI/Header';
import MainNavbar from '../components/UI/MainNavbar';
import CustomTable from '../components/UI/CustomTable';
import Dropdown from '../components/UI/Dropdown';


function Agile_PM() {
  const headings = ["S No","QUESTION", "STATUS TYPE", "STATUS", "SAVE"];
  const [questions, setQuestions] = useState([]);

  const [stageName, setStageName] = useState("Choose Option");
  const [stageId, setStageId] = useState("");
  const [stageData, setStageData] = useState([]);

  const [complianceName, setComplianceName] = useState("Choose Option");
  const [complianceId, setComplianceId] = useState("");
  const [complianceData, setComplianceData] = useState([]);

  const [accountName, setAccountName] = useState("Choose Option");
  const [accountId, setAccountId] = useState("");
  const [accountData, setAccountData] = useState([]);

  const [projectName, setProjectName] = useState("Choose Option");
  const [projectId, setProjectId] = useState("");
  const [projectData, setProjectData] = useState([]);

  const [sowName, setSOWName] = useState("Choose Option");
  const [sowId, setSOWId] = useState("");
  const [sowData, setSOWData] = useState([]);

  const [sprintName, setSprintName] = useState("Choose Option");
  const [sprintId, setSprintId] = useState("");
  const [sprintData, setSprintData] = useState([]);

  console.log("Stage Name:", stageName)
  console.log("StageId :", stageId)

  console.log("Compliance Name:", complianceName)
  console.log("ComplianceId :", complianceId)

  console.log("Account Name:", accountName)
  console.log("AccountId :", accountId)

  console.log("Project Name:", projectName)
  console.log("ProjectId :", projectId)

  console.log("SOW Name:", sowName)
  console.log("SOWId :", sowId)

  console.log("Sprint Name:", sprintName)
  console.log("SprintId :", sprintId)

  const getStageData = async () => {
    const { data } = await axios.get('Account/GetAllStageList');
    // console.log("Stage Data", data)
    const modifiedData = data.map((d) => { return { option: d.stageName, value: d.stageId } });
    setStageData(modifiedData)
  }

  const getComplianceData = async () => {
    const { data } = await axios.get(`Account/GetAllComplianceTypes?StageId=${stageId}`);
    console.log("Compliance Data", data)
    const modifiedData = data.map((d) => { return { option: d.complianceTypeName, value: d.complianceTypeId } });
    setComplianceData(modifiedData)
  }

  const getAccountData = async () => {
    const { data } = await axios.get('Account/GetAllAccounts');
    // console.log("Account Data", data)
    const modifiedData = data.map((d) => { return { option: d.accountName, value: d.accountId } });
    setAccountData(modifiedData)
  }

  const getProjectData = async () => {
    const { data } = await axios.get(`Account/GetAllProjectList?AccountId=${accountId}`);
    // console.log("Project Data", data)
    const modifiedData = data.map((d) => { return { option: d.projectName, value: d.projectId } })
    setProjectData(modifiedData)
  }

  const getSOWData = async () => {
    const { data } = await axios.get(`Account/GetAllSOWList?ProjectId=${projectId}`);
    // console.log("SOW Data", data)
    const modifiedData = data.map((d) => { return { option: d.sowName, value: d.sowId } })
    setSOWData(modifiedData)
  }

  const getSprintData = async () => {
    const { data } = await axios.get(`Account/GetAllSprints?ProjectId=${projectId}&SowId=${sowId}`);
    // console.log("Sprint Data", data)
    const modifiedData = data.map((d) => { return { option: d.sprints, value: d.sprintId } })
    setSprintData(modifiedData)
  }

  const getQuestions = async () => {
    const { data } = await axios.get(`Account/GetAllQuestionList?StageId=${stageId}&ComplianceTypeId=${complianceId}`);
    setQuestions(data)
  }

  // useEffect(() => {
  //   setComplianceName("Choose Option")
  //   getComplianceData();
  // }, [stageId]);

  useEffect(() => {
    // setSOWName("Choose Option")
    getSprintData();
  }, [projectId, sowId]);

  useEffect(() => {
    setSOWName("Choose Option")
    setSprintName("Choose Option")
    getSOWData();
  }, [projectId]);

  useEffect(() => {
    setProjectName("Choose Option")
    getProjectData();
  }, [accountId]);

  useEffect(() => {
    getAccountData();
  }, [])

  useEffect(() => {
    getStageData();
    if (stageId & complianceId) {
      getQuestions();
    }
  }, [stageId, complianceId]);

  useEffect(() => {
    getStageData();
    if (stageId) {
      getComplianceData();
    }
  }, [stageId]);

  return <div>
    <MainNavbar />
    <Header role="PM" />

    <Dropdown
      title={"Stages"}
      data={stageData}
      option={stageName}
      value={stageId}
      setOption={setStageName}
      setValue={setStageId}
    />

    <Dropdown
      title={"Compliance Type"}
      data={complianceData}
      option={complianceName}
      value={complianceId}
      setOption={setComplianceName}
      setValue={setComplianceId}
    />

    <Dropdown
      title={"Account"}
      data={accountData}
      option={accountName}
      value={accountId}
      setOption={setAccountName}
      setValue={setAccountId}
    />
    <Dropdown
      title={"Project"}
      data={projectData}
      option={projectName}
      value={projectId}
      setOption={setProjectName}
      setValue={setProjectId}
    />
    <Dropdown
      title={"SOW"}
      data={sowData}
      option={sowName}
      value={sowId}
      setOption={setSOWName}
      setValue={setSOWId}
    />

    <Dropdown
      title={"SPRINT"}
      data={sprintData}
      option={sprintName}
      value={sprintId}
      setOption={setSprintName}
      setValue={setSprintId}
    />

    <CustomTable headings={headings} data={questions} />

  </div>;
}

export default Agile_PM;