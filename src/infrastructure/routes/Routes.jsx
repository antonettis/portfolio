import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LandingPage from "../../components/LandingPage";
import PortfolioItem from "../../components/PortfolioItem";
import Projects from "../../components/projects.json";
import Header from "../../components/Header";
import ErrorContainer from "../../components/404";

const Routes = () => (
  <>
    <Header />
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 1000, exit: 800 }}
            classNames={"fade"}
          >
            <section className="route-section">
              <Switch location={location}>
                <Route
                  exact
                  path="/"
                  component={LandingPage}
                  key="landingpage"
                />
                {Projects.projects.map((projectRoute, i) => (
                  <Route
                    path={projectRoute.url}
                    key={i}
                    render={props => (
                      <PortfolioItem
                        {...props}
                        key={i}
                        displayName={projectRoute.displayName}
                        date={projectRoute.date}
                        summary={projectRoute.summary}
                        projectType={projectRoute.projectType}
                        mainImage={projectRoute.mainImage}
                        images={projectRoute.images}
                        url={projectRoute.url}
                        videos={projectRoute.videos}
                        mockups={projectRoute.mockups}
                        nextProjectUrl={projectRoute.nextProject.url}
                        nextProjectName={projectRoute.nextProject.displayName}
                      />
                    )}
                  />
                ))}
                <Route path="*" component={ErrorContainer} key="error" />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </>
);

export default Routes;
