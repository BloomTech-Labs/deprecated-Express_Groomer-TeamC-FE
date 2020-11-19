import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
//import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          About <span>Express Groomers</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <p key="p" className="page-content">
              This is the about page：
            </p>
            <div key="code1" className="home-code">
              <div>This is the about page</div>
              <div>
                Our pet stylists make sure your pet is relaxed and enjoys the
                grooming process, making it an experience they’ll look forward
                to every time. Trained in animal behavior and pet healthcare so
                that no detail is overlooked while we pamper and treat your pets
              </div>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
