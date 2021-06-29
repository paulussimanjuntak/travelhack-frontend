import css from "styled-jsx/css";

const style = css`
@media (min-width: 960px) {
  #main-container {
    height: 100vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    overflow: hidden;
  }
}
.auth-sidebar {
  background-color: var(--white);
  position: relative;
  color: #000;
}

@media (min-width: 1100px) {
  :global(.auth-sidebar) {
    width: 70%;
  }
}

@media (min-width: 960px) {
  .auth-sidebar {
    width: 70%;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }

  .auth-sidebar {
    background: #f2d184;
    color: #866118;
  }

  .auth-sidebar .auth-sidebar-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 100%;
  }

  .auth-sidebar,
  .forgot-password .auth-sidebar,
  .reset-password .auth-sidebar {
    background: #97c1c5 !important;
    color: var(--white) !important;
  }
}

.auth-sidebar a {
  color: inherit;
  text-decoration: underline;
}

.auth-sidebar header {
  margin: 0 auto;
  // max-width: 416px;
  padding: 48px 20px 0;
  text-align: left;
}

@media (min-width: 960px) {
  .auth-sidebar header {
    max-width: 100%;
    margin: 0;
    padding: 40px 40px 30px;
  }
}

@media (min-width: 1100px) {
  .auth-sidebar header {
    padding: 64px 64px 30px;
  }
}

.auth-sidebar header .logo {
  display: block;
  margin-bottom: 30px;
}

@media (min-width: 960px) {
  .auth-sidebar header .logo {
    opacity: 0.7;
  }

  .auth-sidebar header .logo:hover {
    opacity: 0.9;
  }
}

.auth-sidebar header h1 {
  color: inherit;
  display: none;
}

@media (min-width: 960px) {
  .auth-sidebar header h1 {
    display: block;
    padding-right: 30px;
  }
}

@media (max-height: 850px) {
  .auth-sidebar header h1 {
    font-size: 25px;
    line-height: 30px;
  }
}

.auth-sidebar .artwork {
  display: none;
}

@media (min-width: 960px) {
  .auth-sidebar .artwork {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: end;
    justify-content: inherit;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
}

.auth-sidebar .artwork .artwork-image {
  -ms-flex-positive: 1;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-position: center center;
}

@media (max-width: 961px), (max-height: 730px) {
  .auth-sidebar .artwork .artwork-image {
    display: block;
  }
}

@media (min-height: 960px) {
  .auth-sidebar .artwork .artwork-image {
    max-height: 70%;
  }
}

.auth-sidebar .artwork .artwork-image {
  background-image: url("/static/images/trip-amico.png");
}

.auth-sidebar .artwork .artwork-attribution {
  font-size: 14px;
  line-height: 14px;
  color: inherit;
  padding: 25px 64px 35px;
  margin: 0;
}

.content {
  width: 100%;
}

@media (min-width: 960px) {
  .content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
  }
}

.main-content-sidebar {
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  background-color: var(--white)!important;
}

@media (min-width: 960px) {
  .main-content-sidebar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0;
    padding: 0;
  }
}

.auth-content {
  width: 100%;
  max-width: 500px;
  margin: auto;
}

.auth-content-title {
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
}

.auth-content-title.forgot-title {
  margin-bottom: 1rem;
}

@media (min-width: 960px) {
  .auth-content {
    padding: 30px 20px 0;
    margin: 0;
  }
  .auth-content-title {
    text-align: left;
    font-weight: 800;
    font-size: 1.5rem;
  }
}

:global(.btn-google .ant-image) {
  vertical-align: sub!important;
}

.btn-signin {
  width: 50%!important;
}

@media (max-width: 959px) {
  .btn-signin {
    width: 100%!important;
  }
}

:global(.input-with-right-child label) {
  width: 100%!important;
}
`

export default style
