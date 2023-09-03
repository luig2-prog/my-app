import Image from 'next/image'
import "./style.css";

export default function ssss() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="inbox-dashboard-view">
        <div className="div">
          <Image
            className="line"
            alt="Line"
            src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <p className="hi-nimi">
            <span className="text-wrapper">Hi</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-2">Nimi,</span>
          </p>
          <p className="p">I’ts looking like a slow day.</p>
          <div className="card-view">
            <div className="label">Unassigned</div>
            <div className="cash">350</div>
            <div className="icon">
              <Image
                className="img"
                alt="Inbox"
                src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
          <div className="card-view-2">
            <div className="label">Assigned</div>
            <div className="cash">450</div>
            <div className="icon">
              <Image
                className="img"
                alt="User"
                src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
          <div className="card-view-3">
            <div className="label">Closed</div>
            <div className="cash">3500</div>
            <div className="icon">
              <Image
                className="img"
                alt="Checkmark"
                src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
          <div className="card-view-4">
            <div className="label">Channels</div>
            <div className="cash">3</div>
            <div className="icon">
              <Image
                className="img"
                alt="Messaging"
                src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
          <div className="date-chart">
            <div className="magic-chart">
              <div className="frame">
                <div className="text-wrapper-3">Today</div>
                <Image
                  className="arrow-chevron-big"
                  alt="Arrow chevron big"
                  src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/arrow---chevron-big-down.svg"
                />
              </div>
              <div className="content">
                <div className="title">
                  <div className="value">
                    <Image
                      className="shape"
                      alt="Shape"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                    <div className="conversations">CONVERSATIONS</div>
                  </div>
                  <div className="legend">
                    <div className="value">
                      <div className="shape-2" />
                      <div className="text-wrapper-4">Today</div>
                    </div>
                    <div className="value">
                      <div className="shape-3" />
                      <div className="text-wrapper-4">Yesterday</div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="overlap">
                    <div className="axis">
                      <div className="text-wrapper-5">No of conversations</div>
                      <div className="body-2">
                        <div className="y">
                          <div className="row">
                            <div className="text-wrapper-6">30</div>
                            <Image
                              className="divider"
                              alt="Divider"
                              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            />
                          </div>
                          <div className="row">
                            <div className="text-wrapper-6">20</div>
                            <Image
                              className="divider"
                              alt="Divider"
                              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            />
                          </div>
                          <div className="row">
                            <div className="text-wrapper-6">10</div>
                            <Image
                              className="divider"
                              alt="Divider"
                              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            />
                          </div>
                          <div className="row">
                            <div className="text-wrapper-7">0</div>
                            <Image
                              className="divider"
                              alt="Divider"
                              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            />
                          </div>
                        </div>
                        <div className="x">
                          <div className="element-PM">
                            10:23 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            10:30 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            10:40 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            10:50 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            11:00 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            11:10 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            11:20 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            11:30 PM
                            <br />
                            10/11
                          </div>
                          <div className="element-PM">
                            11:40 PM
                            <br />
                            10/11
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart">
                      <div className="overlap-group">
                        <Image
                          className="chart-2"
                          alt="Chart"
                          src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        />
                        <div className="position">
                          <div className="indicator">
                            <div className="ellipse-wrapper">
                              <div className="ellipse" />
                            </div>
                            <div className="overlap-group-2">
                              <div className="div-wrapper">
                                <div className="ellipse-2" />
                              </div>
                              <div className="tooltip-tooltip-item-wrapper">
                                <div className="tooltip-tooltip-item">
                                  <div className="frame-2">
                                    <div className="frame-3">
                                      <div className="text-wrapper-8">Today</div>
                                      <div className="element">25</div>
                                    </div>
                                    <div className="frame-3">
                                      <div className="text-wrapper-9">
                                        Yesterday
                                      </div>
                                      <div className="element">23</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard">
            <div className="leaderboard-2">LEADERBOARD</div>
            <Image
              className="calendar"
              alt="Calendar"
              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="group">
              <div className="text-wrapper-10">Most Sales</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <Image
                    className="ellipse-3"
                    alt="Ellipse"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                  <div className="laurel-wreath-wrapper">
                    <Image
                      className="laurel-wreath"
                      alt="Laurel wreath"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-11">Sarah Martins</div>
              <div className="text-wrapper-12">50,000</div>
            </div>
            <div className="group-wrapper">
              <div className="group-2">
                <div className="element-2">2ND</div>
                <div className="text-wrapper-13">Nimi Martins</div>
                <div className="text-wrapper-14">2300</div>
                <Image
                  className="ellipse-4"
                  alt="Ellipse"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
            <div className="group-3">
              <div className="group-2">
                <div className="element-2">3RD</div>
                <div className="text-wrapper-13">Yomi Ndu</div>
                <div className="text-wrapper-14">2300</div>
                <Image
                  className="ellipse-4"
                  alt="Ellipse"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
            <div className="group-4">
              <div className="group-2">
                <div className="element-2">4TH</div>
                <div className="text-wrapper-13">Akin Siyanbola</div>
                <div className="text-wrapper-14">2300</div>
                <Image
                  className="ellipse-4"
                  alt="Ellipse"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
          </div>
          <div className="teammate-table">
            <div className="table-column">
              <div className="base">
                <div className="atom-cell">
                  <div className="division-line">
                    <Image
                      className="line-2"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-2">
                  <div className="division-line">
                    <Image
                      className="line-3"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-2"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-3">
                  <div className="division-line">
                    <Image
                      className="line-4"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-3"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-4">
                  <div className="division-line">
                    <Image
                      className="line-5"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-4"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-5">
                  <div className="division-line">
                    <Image
                      className="line-6"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-5"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-6">
                  <div className="division-line">
                    <Image
                      className="line-7"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-6"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-7">
                  <div className="division-line">
                    <Image
                      className="line-8"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-7"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-8">
                  <div className="division-line">
                    <Image
                      className="line-9"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-8"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-9">
                  <div className="division-line">
                    <Image
                      className="line-10"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-9"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-10">
                  <div className="division-line">
                    <Image
                      className="line-11"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Text</div>
                  <Image
                    className="left-icon-10"
                    alt="Left icon"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
                <div className="atom-cell-11">
                  <div className="division-line">
                    <Image
                      className="line-12"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-12">
                  <div className="division-line">
                    <Image
                      className="line-13"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-13">
                  <div className="division-line">
                    <Image
                      className="line-14"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-14">
                  <div className="division-line">
                    <Image
                      className="line-15"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-15">
                  <div className="division-line">
                    <Image
                      className="line-16"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Out of Stock</div>
                  <div className="status">
                    <div className="ellipse-6" />
                  </div>
                </div>
                <div className="atom-cell-16">
                  <div className="division-line">
                    <Image
                      className="line-17"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-17">
                  <div className="division-line">
                    <Image
                      className="line-18"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-15">Out of Stock</div>
                  <div className="status">
                    <div className="ellipse-6" />
                  </div>
                </div>
                <div className="atom-cell-18">
                  <div className="division-line">
                    <Image
                      className="line-19"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-16">Instock</div>
                  <div className="status">
                    <div className="ellipse-5" />
                  </div>
                </div>
                <div className="atom-cell-19">
                  <div className="division-line-2" />
                  <div className="text-wrapper-17">Collins Iheagwara</div>
                  <div className="frame-4" />
                </div>
                <div className="atom-cell-20">
                  <div className="division-line-2" />
                  <div className="text-wrapper-18">Nimi Martins</div>
                  <div className="frame-5" />
                </div>
                <div className="atom-cell-21">
                  <div className="division-line-2" />
                  <div className="text">Teammates</div>
                </div>
              </div>
            </div>
            <div className="base-wrapper">
              <div className="base">
                <div className="atom-cell-22">
                  <div className="division-line-3" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-23">
                  <div className="division-line-4" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-24">
                  <div className="division-line-5" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-25">
                  <div className="division-line-6" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-26">
                  <div className="division-line-7" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-27">
                  <div className="division-line-8" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-28">
                  <div className="division-line-9" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-29">
                  <div className="division-line-10" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-30">
                  <div className="division-line-11" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-31">
                  <div className="division-line-12" />
                  <div className="text-wrapper-19">Text</div>
                </div>
                <div className="atom-cell-32">
                  <div className="division-line-13" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-33">
                  <div className="division-line-14" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-34">
                  <div className="division-line-15" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-35">
                  <div className="division-line-16" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-36">
                  <div className="division-line-17" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-37">
                  <div className="division-line-18" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-38">
                  <div className="division-line-19" />
                  <div className="text-wrapper-19">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-39">
                  <div className="division-line-20" />
                  <div className="text-wrapper-20">Women’s Outerwear</div>
                </div>
                <div className="atom-cell-40">
                  <div className="division-line-21" />
                  <div className="text-wrapper-20">34</div>
                </div>
                <div className="atom-cell-41">
                  <div className="division-line-21" />
                  <div className="text-wrapper-20">30</div>
                </div>
                <div className="atom-cell-42">
                  <div className="division-line-21" />
                  <div className="text-2">Closed conversations</div>
                </div>
              </div>
            </div>
            <div className="table-column-2">
              <div className="base">
                <div className="atom-cell-43">
                  <div className="line-wrapper">
                    <Image
                      className="line-20"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-44">
                  <div className="line-wrapper">
                    <Image
                      className="line-21"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-45">
                  <div className="line-wrapper">
                    <Image
                      className="line-22"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-46">
                  <div className="line-wrapper">
                    <Image
                      className="line-23"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-47">
                  <div className="line-wrapper">
                    <Image
                      className="line-24"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-48">
                  <div className="line-wrapper">
                    <Image
                      className="line-25"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-49">
                  <div className="line-wrapper">
                    <Image
                      className="line-26"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-50">
                  <div className="line-wrapper">
                    <Image
                      className="line-27"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-51">
                  <div className="line-wrapper">
                    <Image
                      className="line-28"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-52">
                  <div className="line-wrapper">
                    <Image
                      className="line-29"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">Text</div>
                </div>
                <div className="atom-cell-53">
                  <div className="line-wrapper">
                    <Image
                      className="line-30"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1010</div>
                </div>
                <div className="atom-cell-54">
                  <div className="line-wrapper">
                    <Image
                      className="line-31"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1009</div>
                </div>
                <div className="atom-cell-55">
                  <div className="line-wrapper">
                    <Image
                      className="line-32"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1008</div>
                </div>
                <div className="atom-cell-56">
                  <div className="line-wrapper">
                    <Image
                      className="line-33"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1007</div>
                </div>
                <div className="atom-cell-57">
                  <div className="line-wrapper">
                    <Image
                      className="line-34"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1006</div>
                </div>
                <div className="atom-cell-58">
                  <div className="line-wrapper">
                    <Image
                      className="line-35"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1005</div>
                </div>
                <div className="atom-cell-59">
                  <div className="line-wrapper">
                    <Image
                      className="line-36"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-21">XYZ - 1004</div>
                </div>
                <div className="atom-cell-60">
                  <div className="line-wrapper">
                    <Image
                      className="line-37"
                      alt="Line"
                      src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </div>
                  <div className="text-wrapper-22">XYZ - 1003</div>
                </div>
                <div className="atom-cell-61">
                  <div className="division-line-22" />
                  <div className="text-wrapper-22">34</div>
                </div>
                <div className="atom-cell-62">
                  <div className="division-line-22" />
                  <div className="text-wrapper-22">34</div>
                </div>
                <div className="atom-cell-63">
                  <div className="division-line-22" />
                  <div className="text-3">Assigned conversations</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-5">
            <Image
              className="oval"
              alt="Oval"
              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <Image
              className="glyph-chevrondown"
              alt="Glyph chevrondown"
              src="https://generation-sessions.s3.amazonaws.com/947469ed444630526ba2301225c54f44/img/glyph---chevrondown.svg"
            />
          </div>
          <div className="frame-6">
            <div className="text-wrapper-23">Sparkle</div>
            <Image
              className="group-6"
              alt="Group"
              src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <div className="group-7">
              <div className="group-8">
                <div className="text-wrapper-24">Inbox</div>
              </div>
              <div className="group-9">
                <div className="group-10">
                  <div className="text-wrapper-25">Dashboard</div>
                  <Image
                    className="img-2"
                    alt="Categorize"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
              </div>
              <div className="group-11">
                <div className="group-12">
                  <div className="text-wrapper-26">New</div>
                  <Image
                    className="img-2"
                    alt="Inbox"
                    src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  />
                </div>
              </div>
              <div className="group-13">
                <div className="text-wrapper-27">Assigned to me</div>
                <Image
                  className="img-2"
                  alt="User"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="group-14">
                <div className="text-wrapper-27">Mentioned</div>
                <Image
                  className="img-2"
                  alt="Email"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="group-15">
                <div className="text-wrapper-26">Favourite</div>
                <Image
                  className="img-2"
                  alt="Star filled"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="group-16">
                <div className="text-wrapper-26">Drafts</div>
                <Image
                  className="img-2"
                  alt="Edit"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="group-17">
                <div className="text-wrapper-27">Closed</div>
                <Image
                  className="img-2"
                  alt="Checkmark"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="group-18">
                <div className="text-wrapper-26">Snoozed</div>
                <Image
                  className="img-2"
                  alt="Snooze"
                  src="https://plus.unsplash.com/premium_photo-1664047543348-1536f15d248c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
