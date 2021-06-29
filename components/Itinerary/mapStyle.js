import css from "styled-jsx/css";

const style = css`
      :global(.gm-ui-hover-effect) {
        display: none !important;
      }
      :global(.gm-style-iw-d) {
        overflow: hidden !important;
      }
      :global(.gm-style .gm-style-iw-c) {
        top: 40px;
        padding: 0px;
        background: #212529;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
      }
      :global(.gm-style .gm-style-iw-t::after) {
        z-index: -1;
        background: #212529;
      }

      :global(.close-button-detail-map) {
        box-shadow: unset;
        text-shadow: unset;
        border-color: transparent;
        background: #0000000f;
        color: #6c757d;
      }

      :global(.ant-btn-primary.close-button-detail-map) {
        box-shadow: unset;
        text-shadow: unset;
        border-color: #e8ecec;
        background: #e8ecec;
        color: #6c757d;
      }
      :global(.ant-btn-primary.close-button-detail-map:hover, .ant-btn-primary.close-button-detail-map:focus) {
        background-color: #d1d6d9;
        border-color: #d1d6d9;
        color: #000000b0;
      }

      :global(.badge-opening-hours) {
        width: 1.125rem;
        height: 1.125rem;
        font-size: .55rem;
        border-radius: 50%;
        line-height: 1.5;
        vertical-align: middle;
        color: #6c757d;
        background-color: #d6d6d6;
      }
      :global(.scrollable-card-detail-map) {
        max-height: 300px;
        overflow: scroll;
      }

      :global(.centered-idx) {
        position: absolute;
        top: 43%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 12px;
      }
`

export default style
