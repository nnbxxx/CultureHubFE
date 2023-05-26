import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Image, Layout, Row, Typography, theme } from "antd";
import HeaderUser from "../../components/Header/HeaderUser";
import { Content } from "antd/es/layout/layout";
import FooterUser from "../../components/Footer/FooterUser";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
} from "@ant-design/icons";
const { Text, Link, Title, Paragraph } = Typography;

const BlogPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <HeaderUser />
      <Content
        style={
          {
            // padding: "0 50px",
            // overflow: "initial",
            // marginTop: "20px",
          }
        }
      >
        <div
          className='site-layout-content'
          style={{
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              minHeight: "425px",
              backgroundColor: "#46178F",
              color: "white",
              display: "block",
              padding: "30px 350px 30px 450px",
              borderRadius: "10px 10px 0 0",
              position: "relative",
            }}
          >
            <h1 style={{ fontSize: 44, textAlign: "left" }}>
              Gamified learning experiences were the main character at this
              year’s Kahoot! EDU Meetup!
            </h1>
            <span style={{ fontWeight: 400, fontSize: 22, textAlign: "left" }}>
              Yesterday, we learned why teachers around the world are gaming and
              learning with their students to boost engagement and learning
              retention!
            </span>
            <Meta
              avatar={
                <Avatar
                  src={"https://xsgames.co/randomusers/avatar.php?g=pixel"}
                  size={70}
                  style={{ border: "5px solid #fff" }}
                />
              }
              title={
                <>
                  <Text underline style={{ color: "white", cursor: "pointer" }}>
                    Admin
                  </Text>
                </>
              }
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 5,
                position: "absolute",
                top: "50%",
                left: "20%",
              }}
              description={
                <>
                  <Text style={{ color: "white" }}>24 Mar 2023</Text>
                </>
              }
            ></Meta>
          </div>
          <div style={{ margin: "0 160px", padding: "50px 0" }}>
            <Row gutter={[10, 10]}>
              <Col
                span={4}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <Text strong style={{ fontSize: 18, fontWeight: 700 }}>
                  SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#3C5A99",
                  }}
                  className='hover-underline'
                >
                  <FacebookFilled style={{ marginRight: 5 }} /> SHARE
                </Text>

                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#1DA1F2",
                  }}
                  className='hover-underline'
                >
                  <TwitterSquareFilled style={{ marginRight: 5 }} /> SHARE
                </Text>
                <Text
                  strong
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                    width: "fit-content",
                    blockSize: "fit-content",
                    color: "#0077B5",
                  }}
                  className='hover-underline'
                >
                  <LinkedinFilled style={{ marginRight: 5 }} />
                  SHARE
                </Text>
              </Col>
              <Col span={20}>
                <Title level={3} style={{ marginTop: -10, fontWeight: 700 }}>
                  How higher ed faculty are boosting student engagement!
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  As Kahoot! was born in higher ed, our first EDU Meetup last
                  week was a long-awaited and highly anticipated return to our
                  roots! We saw presentations from higher ed faculty and admins
                  sharing their recommended best practices for using Kahoot! in
                  your courses. They detail their first-hand experience
                  reviewing course content, assessing knowledge, and fostering
                  discussion with Kahoot!. So, with exam season right around the
                  corner, there’s no better time to get up to date on our latest
                  features and updates to try out with your students!
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  In case you missed it or want to revisit any of your favorite
                  sessions and &nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    rewatch on-demand
                  </Text>
                  !
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Don’t forget to take advantage of our special EDU Meetup offer
                  to &nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    get up to 20% off on Kahoot!+ plans
                  </Text>
                  &nbsp;from $12.99/month, or if you’re already on a Kahoot! EDU
                  Standard plan, email&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    schoolpack@kahoot.com
                  </Text>
                  &nbsp;for a free upgrade to Kahoot! EDU Pro.
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  What’s new at Kahoot! for Higher ed
                </Title>
                <Image
                  width={1028}
                  height={580}
                  src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  For our 10th anniversary of making learning awesome, Sean
                  D’Arcy, VP of Kahoot! at School, highlighted how far we’ve
                  come since our humble beginnings as a university project.
                  Attendees got a look at higher ed faculty favorites, including
                  word cloud, open-ended, and brainstorm question types, as well
                  as our newest question types, drop pin, slider, and 6 answer
                  options for quizzes and polls! And that was only the
                  beginning! We’re excited to introduce so many new ways of
                  creating interactive learning experiences with Student Passes,
                  giving students access to the Kahoot! Creator, and engaging
                  study modes, encouraging student knowledge sharing in and out
                  of the classroom. Plus student-led game modes, and Kahoot!
                  courses that allow instructors to add multiple kahoots,
                  videos, PDFs, and other resources into full courses that can
                  be hosted live, assigned to students, or studied at their own
                  pace.
                </Paragraph>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Our most recent project, Kahoot! for Brands was also
                  announced, making it possible for faculty and admins to add
                  their higher ed institutions’ unique branding into all kahoots
                  hosted on campus! We’re so thankful for the constant support
                  from the higher ed community over the past 10 years with over
                  97% of the global top 500 universities using Kahoot!, and over
                  82% of those with upgraded Kahoot! EDU or Kahoot!+ accounts.
                  That’s a lot of awesome learning happening around the world!
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Kick up the engagement with kahoots
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  As a Professor of Education at McKendree University, Dr. Julie
                  Tronsing-Meyer’s students are future teachers learning about
                  how to effectively teach lesson content. Dr. Tronsing-Meyer
                  discusses her research-based teaching practices and how ISTE
                  standards and the constructivist teaching theory support the
                  use of Kahoot! for effective learning. In practice with her
                  undergraduate students, she found that using Kahoot! was a
                  great way to support active learning because her students
                  learn through experience, social discourse, and collaboration.
                  Finally, Julie gives us her tips and tricks for using Kahoot!
                  in her courses and shares feedback from her students, who
                  said, “Kahoot! makes me feel confident to participate in the
                  activity”.
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  From student to teacher – using Kahoot! in all academic arenas
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Kurt Naicker is a Senior Lecturer at the School of Accounting
                  at North West University and the Campus Innovation Lead within
                  the Faculty of Economics and Management Sciences. Kurt talked
                  us through his experiences using Kahoot! not only as an
                  instructor but also as a student himself! He discusses how
                  Kahoot! aided in his professional growth and how he brought
                  his learnings with him as a faculty leader, helping to
                  implement technology and exploring how to keep curriculum
                  relevant in the future of AI, machine learning, and the fourth
                  industrial revolution. Kurt shared from his own experience and
                  the opinion of his students, that there was an observable
                  improvement in their achievement and performance as Kahoot!
                  increased knowledge retention, collaboration, and helped them
                  take a more structured approach to assessment.
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Make the most of Kahoot! tools for interactive learning and
                  assessment
                </Title>
                <Image
                  width={1028}
                  height={580}
                  src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                  preview={false}
                  style={{ padding: "10px 0" }}
                />
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  This is a session you won’t want to miss! Joshua Scoggin,
                  Account Executive at Kahoot!, shows you how to take any
                  Kahoot! from good to great, optimize the Kahoot! experience
                  for assessment, and gives an in-depth demonstration of Kahoot!
                  Creator, question types, and options. Whether you’re new to
                  Kahoot! or a seasoned Kahoot!er, there is something here for
                  everyone from the foundations of how to choose the right
                  question types for your content to how you can create a plan
                  and organize your information so your students can get the
                  most out of the Kahoot! experience!
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Uncommon Kahoot!s – Have you ever…?
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Dr. Jennifer Robinette, Senior Professional Lecturer of
                  Communication and Public Relations at Marist College,
                  challenges the audience to teach entire, hour-long lectures
                  with Kahoot! as an end-to-end interactive presentation tool.
                  With recommended structures for how Kahoot! can complement the
                  flipped classroom approach, Dr. Robinette discusses the value
                  of incorporating Kahoot! questions throughout classroom
                  content, encouraging students to constantly apply themselves
                  by including PowerPoint slides and videos interwoven with
                  polls, word clouds, and puzzles that optimize lessons for
                  student attention spans. To really lock in the learning,
                  Jennifer creates lightning rounds to repeat any difficult
                  questions that came up in the lesson with less time to answer
                  and worth more points! Now that’s a recipe for engaging
                  learning that her students loved so much, they even shared the
                  experience on social media!
                </Paragraph>
                <Title level={4} style={{ marginTop: -10, fontWeight: 700 }}>
                  Thank you for making this event awesome!
                </Title>
                <Paragraph
                  style={{ fontSize: 18, textAlign: "left", color: "#333333" }}
                >
                  Thank you to everyone who participated in our first&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    Kahoot! EDU Meetup for higher ed
                  </Text>
                  , and to our speakers who made this event truly awesome with
                  all their insights and advice for improving the learning
                  experience for every student! Don’t forget to&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    re-watch your favorite sessions
                  </Text>
                  &nbsp;and take advantage of our EDU Meetup offer to get access
                  to all these great features and&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                  >
                    save up to 20% on a Kahoot!+ plan
                  </Text>
                  &nbsp;from $12.99/month!
                </Paragraph>
                <Paragraph
                  style={{
                    fontSize: 18,
                    textAlign: "left",
                    color: "#333333",
                  }}
                >
                  If you have any content from the event or your own classrooms
                  that you would like to share, please reach out or tag us
                  on&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                    strong
                  >
                    Twitter
                  </Text>
                  ,&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                    strong
                  >
                    Facebook
                  </Text>
                  ,&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                    strong
                  >
                    Instagram
                  </Text>
                  ,&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                    strong
                  >
                    LinkedIn
                  </Text>
                  , and&nbsp;
                  <Text
                    style={{
                      fontSize: 18,
                      cursor: "pointer",
                      fontWeight: 400,
                    }}
                    className='text-hover'
                    underline
                    strong
                  >
                    TikTok
                  </Text>
                  ! We hope you have a great rest of the term and we’ll see you
                  again soon for the EDU Summit in June!
                </Paragraph>
                <Title style={{ color: "#333", fontSize: 44 }}>
                  Related articles
                </Title>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#46178F",
                      borderColor: "#46178F",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Dimitri Kanaris
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://kahoot.com/files/2021/12/dimitri_yellow.png"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Gamified learning experiences were the main character at
                      this year’s Kahoot! EDU Meetup!
                    </Paragraph>
                    <Paragraph style={{ color: "white", fontSize: 14 }}>
                      Yesterday, we learned why teachers around the world are
                      gaming and learning with their students to boost
                      engagement and learning retention!
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
                      }}
                    >
                      Learn More{" "}
                    </Text>
                    <div
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        margin: "0 -10px 0",
                        padding: "10px 65px",
                        borderRadius: "10px 10px 0 0",
                        position: "absolute",
                        top: "92%",
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#46178F",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#26890C",
                      borderColor: "#26890C",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Dimitri Kanaris
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://kahoot.com/files/2021/12/dimitri_yellow.png"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Gamified learning experiences were the main character at
                      this year’s Kahoot! EDU Meetup!
                    </Paragraph>
                    <Paragraph style={{ color: "white", fontSize: 14 }}>
                      Yesterday, we learned why teachers around the world are
                      gaming and learning with their students to boost
                      engagement and learning retention!
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
                      }}
                    >
                      Learn More{" "}
                    </Text>
                    <div
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        margin: "0 -10px 0",
                        padding: "10px 65px",
                        borderRadius: "10px 10px 0 0",
                        position: "absolute",
                        top: "92%",
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#26890C",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                  <Card
                    style={{
                      width: 330,
                      height: 550,
                      backgroundColor: "#E21B3C",
                      borderColor: "#E21B3C",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      position: "relative",
                    }}
                    cover={
                      <Image
                        alt='example'
                        src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                        preview={false}
                        height={185}
                      />
                    }
                  >
                    <Meta
                      style={{ marginBottom: 20 }}
                      title={
                        <div
                          style={{ color: "white" }}
                          className='hover-underline'
                        >
                          Dimitri Kanaris
                        </div>
                      }
                      description={
                        <div style={{ color: "white", marginTop: -10 }}>
                          March 24, 2023
                        </div>
                      }
                      avatar={
                        <Avatar
                          src={
                            "https://kahoot.com/files/2021/12/dimitri_yellow.png"
                          }
                          size={50}
                          style={{ border: "5px solid #fff" }}
                        />
                      }
                    />
                    <Paragraph
                      style={{ fontSize: 18, color: "white" }}
                      ellipsis={{ rows: 2 }}
                      className='hover-underline'
                      strong
                    >
                      Gamified learning experiences were the main character at
                      this year’s Kahoot! EDU Meetup!
                    </Paragraph>
                    <Paragraph style={{ color: "white", fontSize: 14 }}>
                      Yesterday, we learned why teachers around the world are
                      gaming and learning with their students to boost
                      engagement and learning retention!
                    </Paragraph>
                    <Text
                      strong
                      underline
                      style={{
                        color: "white",
                        fontSize: 16,
                        cursor: "pointer",
                      }}
                    >
                      Learn More{" "}
                    </Text>
                    <div
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        margin: "0 -10px 0",
                        padding: "10px 65px",
                        borderRadius: "10px 10px 0 0",
                        position: "absolute",
                        top: "92%",
                        right: 70,
                        cursor: "pointer",
                      }}
                    >
                      <Text
                        style={{
                          color: "#E21B3C",
                          fontWeight: 700,
                        }}
                      >
                        events
                      </Text>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Content>
      <FooterUser />
    </Layout>
  );
};

export default BlogPage;
