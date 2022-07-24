import { Row } from "antd";
import { NavLink } from "react-router-dom";

import style from "./StartPage.module.css";

export default function StartPage() {
  return (
    <>
      <Row justify="center" align="middle">
        <div className={style.wrap}>
          <NavLink
            to={{
              pathname: `/users`,
            }}
            className={style.button}
          >
            Go to see test result
          </NavLink>
        </div>
      </Row>
    </>
  );
}
