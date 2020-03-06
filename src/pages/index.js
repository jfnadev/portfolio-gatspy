import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BankNoteRotated from "../images/bank-note-rotated.svg";
import SupBill from "../images/supbill.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="about">
      <div className="wave wave--top"></div>
      <div className="bg-yellow-rotated bg-yellow-400 bg-16 bg-left-bottom text-center pt-1 pr-8 pb-1 pl-8" >
          <div className="container max-w-xl mx-auto ">
              <h3 className="text-3xl text-gray-800 bg-gradient-h3 text-center py-8 pb-6 font-bold">Hi, I’m Ayoub. Nice to meet you.</h3>
              <p className="text-center pt-4 pb-8 text-xl break-all">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          </div>
      </div>
      <div className="skills flex flex-row p-10 text-center mx-6">
          <div className="core w-1/3 p-8">
              <h3 className="uppercase text-4xl font-bold border-yellow-400 border-b w-1/2 m-auto mb-8">core</h3>
              <span className="flex flex-col">
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>Node.js</span>
                <span>HTML5</span>
                <span>Mobile & Responsive Design</span>
              </span>
          </div>
          <div className="libraries w-1/3 p-8">
              <h3 className="uppercase text-4xl font-bold border-yellow-400 border-b mb-8 w-1/2 m-auto">libraries</h3>
              <span className="flex flex-col">
                <span>React.js</span>
                <span>Vue.js</span>
                <span>Express</span>
                <span>Gulp</span>
                <span>jQuery</span>
              </span>
          </div>
          <div className="dev__tools w-1/3 p-8">
              <h3 className="uppercase text-4xl font-bold border-yellow-400 border-b mb-8 w-2/3 m-auto">dev tools</h3>
              <span className="flex flex-col">
                <span>Bootstrap</span>
                <span>Codepen</span>
                <span>Github</span>
                <span>Gitlab</span>
                <span>Terminal</span>
              </span>
          </div>
      </div>
    </section>
    <section class="projects text-center p-16">
    <h3 className="text-5xl text-gray-800 font-bold">My Works</h3>
    <span className="text-gray-800 mb-12 block">Here are a few projects. Want know about it?
      <a className="text-gray-800 hover:text-gray-800" href="mail:gemouhi@gmail.com">Email me.</a>
    </span>
    <div class="projects__all grid grid-cols-4 text-center gap-16">
        <div><img className="w-4/5 m-auto rounded" src={SupBill} /></div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
        <div><img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" /></div>
        <div className="col-start-2">
          <img className="w-4/5 m-auto rounded" src="https://via.placeholder.com/150" />
        </div>
        <div><img className="w-4/5 m-auto rounded col-start-3" src="https://via.placeholder.com/150" /></div>
    </div>
    </section>
    <section className="investing text-center p-16">
      <h3 className="text-5xl text-gray-800 font-bold">Interested in collaborating or investing?</h3>
      <span className="mb-6 block">I’m always open to discussing product design work or partnership opportunities.</span>
      <button className="text-orange-500 border-2 border-orange-500 rounded py-2 px-4 font-bold text-2xl hover:bg-orange-500 hover:text-white" onclick="window.location.href='/contact'">Start a conversation</button>
    </section>
  </Layout>
)

export default IndexPage
