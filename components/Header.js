import React, {Component, useEffect, useState} from "react";
import "../static/style/pages/header.css";
import {Row, Col, Menu, Icon} from "antd";
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()


  }, [])
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/index')
    }
    else {
      console.log(e.index)
      Router.push('/list?id=' + e.key)
    }
  }
  console.log(navArray)
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">GXY</span>
          <span className="header-txt">一个初学前端的菜鸟，正在路上奔跑</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={9} xl={8}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon type="home" />
              博客首页
          </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
