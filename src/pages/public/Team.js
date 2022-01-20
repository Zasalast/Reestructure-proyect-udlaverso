import React, { useEffect, useState } from "react";
import { getAll } from "./../../service/PersonsService";
import { getInvoices } from "../../data";
import api from "../service/api2";

const Team = () => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    person: undefined,
  });

  useEffect(() => {
    const data = getAll();
    setState({ ...state, person: data });
    console.log(data, "1");
    console.log(state.person, "4");
  }, []);

  /*   const { id, userId, description, fistName, job } = data; */
  if (this.State.loading === true) {
    return "Loading...";
  }
  if (this.state.error) {
    return `Error: ${this.State.error.message}`;
  }

  return (
    <>
      {/*  <h2>Team</h2>;
      <div className="site-card-wrapper">
        {" "}
        <Row gutter={16}>
          {" "}
          <a href="https://sites.google.com/view/redes3d/qui%C3%A9nes-somos">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={UserAddOutlined} />}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="¿Qué hacemos? "
                description="This is the description"
              />
              <div>{data.team}</div>
            </Card>
          </a>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={UserAddOutlined} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="¿Qué hacemos? "
              description="This is the description"
            />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={UserAddOutlined} />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Trabaja con Nosotros"
              description="This is the description"
            />
          </Card>
          ,
        </Row>
      </div> */}
    </>
  );
};
export { Team };
