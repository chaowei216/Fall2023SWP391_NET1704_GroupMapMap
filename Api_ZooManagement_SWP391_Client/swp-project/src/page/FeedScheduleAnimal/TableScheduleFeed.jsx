import * as React from "react";
import { useState, useEffect } from "react";
import AddAnimal from "../Animal/AddAnimalPage";
import Button from "@mui/material/Button";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import "../../assets/css/dashboard.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Image } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import EditAnimal from "../Animal/EditAnimalPage";
import ViewAnimal from "../Animal/ViewAnimalPage";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import YourComponent from "../Animal/AnimalFoodTest";
import EditAnimalByZooTrainer from "../Animal/EditAnimalByZooTrainer";
import { MDBTypography } from "mdb-react-ui-kit";
import PetsIcon from "@mui/icons-material/Pets";
import moment from "moment";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { toast } from "react-toastify";
function TableScheduleFeed() {
  const emailInfo = localStorage.getItem("email");
  const [showModalAdd, setShowmodalAdd] = useState(false);
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [showModalFodd, setShowmodalFood] = useState(false);
  const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
  const [listAnimal, setListAnimal] = useState([]);
  const [listFood, setListFood] = useState([]);
  const [dataAnimalEdit, setDataAnimalEdit] = useState({});
  const [dataAnimalView, setDataAnimalView] = useState({});
  const [profileZooTrainer, setProfileZooTrainer] = useState({});
  const [listAnimalFilter, setListAnimalFilter] = useState([]);
  const [animalFilter, setAnimalFilter] = useState([]);
  const [aID, setAID] = useState("");
  useEffect(() => {
    const getTrainerList = () => {
      return fetch("https://localhost:44352/api/User/users").then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getTrainerList().then((items) => {
      if (mounted) {
        setProfileZooTrainer(items.filter((user) => user.email === emailInfo));
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const getList = () => {
      return fetch("https://localhost:44352/api/Animal").then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListAnimal(items);
      }
    });
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    const ZooProfileTest = profileZooTrainer;
    if (ZooProfileTest.length > 0) {
      setAID(ZooProfileTest[0].userId);
    }
  }, [profileZooTrainer]);

  function getPeriod(hour) {
    if (hour >= 6 && hour < 12) {
      return "morning";
    }
    if (hour >= 12 && hour < 18) {
      return "afternoon";
    }
    if (hour >= 18 || hour < 6) {
      return "evening";
    }
  }
  function parseTime(time) {
    // Chuyển thời gian sang đối tượng Date
    const [hours] = time.split(":");
    const hour = parseInt(hours);
    console.log(hour);
    if (hour >= 6 && hour < 12) {
      return "morning";
    }
    if (hour >= 12 && hour < 18) {
      return "afternoon";
    }
    if (hour >= 18 || hour < 6) {
      return "evening";
    }
  }
  // Lấy thời gian hiện tại
  const now = new Date();
  // const testNow = new Date(now)
  // console.log(testNow.getHours());
  // Xác định khung giờ hiện tại
  const currentPeriod = getPeriod(now.getHours());
  // useEffect(() => {
  //   const a = list;
  //   const currentPeriod = getPeriod(now.getHours());
  //   // a.map((item) => {
  //   //   // item.schedules.map((value) =>{
  //   //   //   const matchedSchedules = value.filter(schedule => {
  //   //   //     const schedulePeriod = getPeriod(schedule.time);
  //   //   //     return schedulePeriod === currentPeriod;
  //   //   //   });
  //   //   //   // console.log(matchedSchedules);
  //   //   //   // const schedulePeriod = getPeriod(value.time)
  //   //   //   // console.log(currentPeriod);
  //   //   //   // console.log(schedulePeriod);
  //   //   //   // if (currentPeriod.includes(schedulePeriod)){
  //   //   //   //   console.log(value);
  //   //   //   // }
  //   //   //   // if(value.time >= afternoon.start && value.time < afternoon.end) {
  //   //   //   //   console.log(value);
  //   //   //   // }
  //   //   // })
  //   //   const matchedSchedules = item.schedules.filter((schedule) => {
  //   //     const schedulePeriod = parseTime(schedule.time);
  //   //     console.log(currentPeriod);
  //   //     console.log(schedulePeriod);
  //   //     return schedulePeriod === currentPeriod;
  //   //   });
  //   //   console.log(matchedSchedules);
  //   // });
  //   const filteredAnimals = list.filter((animal) => {
  //     return animal.schedules.some((schedule) => {
  //       const schedulePeriod = parseTime(schedule.time);
  //       return schedulePeriod === currentPeriod;
  //     });
  //   });
  //   setListAnimalFilter(filteredAnimals)
  // }, [list]);
  useEffect(() => {
    const list = listAnimal.filter((animal) => animal.userId === aID);
    const currentPeriod = getPeriod(now.getHours());
    const filteredAnimals = list.filter((animal) => {
      return animal.schedules.some((schedule) => {
        const schedulePeriod = parseTime(schedule.time);
        return (
          schedulePeriod === currentPeriod &&
          (schedule.scheduleName === "Breakfast" ||
            schedule.scheduleName === "Lunch" ||
            schedule.scheduleName === "Dinner")
        );
      });
    });
    setListAnimalFilter(filteredAnimals);
  }, [listAnimal]);
  const handleClick = () => {
    setShowmodalAdd(true);
    setAnchorEl(null);
  };
  const handleClick2 = () => {
    setShowmodalFoodAnimal(true);
    setAnchorEl(null);
    // window.location.href = setAnchorEl(null);
  };
  const handleClickPop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setShowmodalFoodAnimal(false);
    setShowmodalEdit(false);
    setShowmodalAdd(false);
    setShowmodalView(false);
    setShowmodalFood(false);
    setAnchorEl(null);
  };

  const handleEditUser = async (item, value) => {
    // setDataUserEdit(item);
    console.log(value);
    console.log(item);
    const feedAnimal = item.animalId;
    const scheduleId = value.scheduleId;
    const response = await fetch(
      `https://localhost:44352/api/Food/animalId?animalId=${feedAnimal}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response2 = await fetch(
      `https://localhost:44352/api/Schedule/UpdateSchedule?animalId=${feedAnimal}&scheduleId=${scheduleId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok && response2.ok) {
      console.log("Success");
      toast.success("Feed successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Error");
    }
  };

  const handleViewUser = (item) => {
    // setDataUserEdit(item);
    const animal = item;
    setDataAnimalView(animal);
    setShowmodalView(true);
  };
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(hours);
  console.log(minutes);
  async function resetSchedule() {
    try {
      await fetch(`https://localhost:44352/api/Schedule/ResetSchedule`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("Error resetting schedule");
    }
  }
  function checkResetTime() {
    const now = new Date();
    const hours = now.getHours();

    // So sánh với thời điểm reset
    if (hours > 0 && hours < 7) {
      resetSchedule();
    }
  }
  // setInterval(() => {
  //   checkResetTime();
  // }, 1000); // 1 hour
  function runDailyReset() {
    setInterval(() => {
      checkResetTime();
    }, 1000 * 60 * 30); // Chạy mỗi 1 giây
  }
  runDailyReset();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleReset = () => {
    resetSchedule();
    if (resetSchedule){
      toast.success("Reset Success");
      setTimeout(() => {
        window.location.reload();
      },1200)
    }else{
      toast.error("Error");
    }
  }
  let count = 0;
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="table-container">
      <div className="table-component">
        <div
          className="my-3 add-new"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {/* <Image
            width={90}
            src="https://img.freepik.com/premium-vector/zoo-logo-design-vector-illustration_742779-149.jpg?w=2000"
          ></Image> */}
          <MDBTypography tag="h2" color="secondary" noteColor="secondary">
            <i> Animal Feeding Chart</i>
          </MDBTypography>

        </div>
        <div className="mb-4" style={{textAlign: "end"}}>
          <Button
            onClick={() => {
              handleReset();
            }}
            variant="outlined"
            style={{
              padding: 0,
              backgroundColor: "green",
              color: "white",
              width: "90px",
              height: "35px",
              marginRight: "15px",
            }}
          >
            <RestartAltIcon/> Reset
          </Button>
        </div>
        <div className="table-content">
          <MDBTable>
            <MDBTableHead
              dark
            // style={{
            //   borderTop: "white",
            //   borderRight: "black",
            //   borderLeft: "black",
            //   borderBottom: "black",
            // }}
            >
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  No.
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  ANIMAL
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  PERIOD
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  FOOD
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  AMOUNT OF FEED (KG)
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  TIME OF DAY
                </th>
                <th scope="col" style={{ textAlign: "center" }}>
                  ACTION
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {listAnimalFilter &&
                listAnimalFilter.length > 0 &&
                listAnimalFilter.map((items, index) => {
                  return (
                    <tr
                      style={{
                        height: "70px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        fontWeight: "500",
                      }}
                    >
                      <th scope="row">{(count += 1)}</th>
                      <td>{items.name}</td>
                      <td style={{ width: "105px" }}>
                        {items.schedules &&
                          items.schedules.map((value) => {
                            const schedulePeriod = parseTime(value.time);
                            const currentPeriod = getPeriod(now.getHours());
                            if (
                              schedulePeriod === currentPeriod &&
                              (value.scheduleName === "Breakfast" ||
                                value.scheduleName === "Lunch" ||
                                value.scheduleName === "Dinner")
                            ) {
                              return (
                                <div>
                                  <span>{value.scheduleName}</span>
                                </div>
                              );
                            }
                          })}
                      </td>
                      <td>
                        {items.foods &&
                          items.foods.map((value) => {
                            return (
                              <div key={value.fName}>
                                <span>{value.fName}</span>
                              </div>
                            );
                          })}
                      </td>
                      <td>
                        {items.foods &&
                          items.foods.map((value) => {
                            return (
                              <div key={value.amount}>
                                <span>{value.amount}</span>
                              </div>
                            );
                          })}
                      </td>
                      <td>
                        {items.schedules &&
                          items.schedules.map((value) => {
                            const schedulePeriod = parseTime(value.time);
                            const currentPeriod = getPeriod(now.getHours());
                            if (
                              schedulePeriod === currentPeriod &&
                              (value.scheduleName === "Breakfast" ||
                                value.scheduleName === "Lunch" ||
                                value.scheduleName === "Dinner")
                            ) {
                              return (
                                <div>
                                  <span>{value.time}</span>
                                </div>
                              );
                            }
                          })}
                      </td>
                      <td style={{ width: "208px", verticalAlign: "middle" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewUser(items);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        {items.schedules &&
                          items.schedules.map((value) => {
                            const schedulePeriod = parseTime(value.time);
                            const currentPeriod = getPeriod(now.getHours());
                            {
                              value.status;
                            }
                            if (
                              schedulePeriod === currentPeriod &&
                              value.isDone === false &&
                              (value.scheduleName === "Breakfast" ||
                                value.scheduleName === "Lunch" ||
                                value.scheduleName === "Dinner")
                            ) {
                              return (
                                <Button
                                  onClick={() => {
                                    handleEditUser(items, value);
                                  }}
                                  variant="text"
                                  style={{
                                    padding: 0,
                                    backgroundColor: "gray",
                                    color: "white",
                                    width: "84px",
                                    marginRight: "15px",
                                  }}
                                >
                                  Not Yet
                                </Button>
                              );
                            }
                          })}
                        {items.schedules &&
                          items.schedules.map((value) => {
                            const schedulePeriod = parseTime(value.time);
                            const currentPeriod = getPeriod(now.getHours());
                            if (
                              schedulePeriod === currentPeriod &&
                              value.isDone === true &&
                              (value.scheduleName === "Breakfast" ||
                                value.scheduleName === "Lunch" ||
                                value.scheduleName === "Dinner")
                            ) {
                              return (
                                <Button
                                  onClick={() => {
                                    handleEditUser(items);
                                  }}
                                  variant="text"
                                  disabled
                                  style={{
                                    padding: 0,
                                    backgroundColor: "green",
                                    color: "white",
                                    width: "84px",
                                    marginRight: "15px",
                                  }}
                                >
                                  Done
                                </Button>
                              );
                            }
                          })}
                      </td>
                    </tr>
                  );
                })}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
      <AddAnimal show={showModalAdd} handleClose={handleClose} />
      <EditAnimalByZooTrainer
        show={showModalEdit}
        handleClose={handleClose}
        dataAnimalEdit={dataAnimalEdit}
      />
      <ViewAnimal
        show={showModalView}
        handleClose={handleClose}
        dataAnimalView={dataAnimalView}
      />
      {/* <AddAnimalFood show={showModalFoodAnimal} handleClose={handleClose} /> */}
      <YourComponent
        show={showModalFoodAnimal}
        handleClose={handleClose}
      ></YourComponent>
    </div>
  );
}

export default TableScheduleFeed;
