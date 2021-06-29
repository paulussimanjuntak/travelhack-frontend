import css from "styled-jsx/css";

const style = css`
      :global(.shadow-1) {
        box-shadow: 0 0.5rem 1.2rem rgba(0,0,0,0.35)!important;
      }
      :global(.itinerary-main) {
        min-height: 100vh;
      }
      :global(.container-card-attraction) {
        max-height: calc(100vh - 57px);
        overflow-y: auto;
      }
      :global(.itinerary-body) {
        max-height: 100vh;
      }
      :global(.draggable-itineraries-row) {
        height: 100vh;
        max-height: calc(100vh - 57px);
      }

      :global(.datepicker-changedate .ant-picker-range-arrow) {
        display: none;
      }
      :global(.datepicker-changedate .ant-picker-panel-container) {
        border-radius: 10px;
      }

      :global(.scrollable-row) {
        overflow-y: auto;
        flex-flow: unset;
      }
      :global(.scrollable-row::-webkit-scrollbar) {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
      }

      :global(.itinerary-date-btn) {
        color: rgba(0, 0, 0, 0.65);
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        padding: 4px 15px 4px 0px;
        background: white;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .3s ease;
      }
      :global(.itinerary-date-btn:hover) {
        cursor: pointer;
        color: var(--black-pearl);
        border: 1px solid var(--black-pearl);
      }
      :global(.itinerary-date-btn.active) {
        color: var(--black-pearl);
        border: 1px solid var(--black-pearl);
      }

      :global(.gmap-autocomplete) {
        margin: 8px auto;
        width: calc(100% - (80px*2));
      }
      :global(.gmap-input-autocomplete) {
        font-size: 14px;
        color: var(--gray-8);
        border-color: white;
        border-width: 3px;
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
      }
      :global(.gmap-input-autocomplete:hover) {
        border-color: white;
      }
      :global(.gmap-input-autocomplete:focus, .ant-input-focused) {
        border-color: white;
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
      }
      :global(.gmap-input-autocomplete.ant-input-affix-wrapper > input.ant-input) {
        font-size: 14px;
        color: var(--gray-8);
      }
      :global(.gmap-input-autocomplete.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover) {
        border-color: white;
        border-width: 3px;
      }

      :global(.btn-optimize-map) {
        z-index: 1;
        margin: 10px auto;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
        align-items: center !important;
      }

      :global(.detail-card-place-map) {
        z-index: 1;
        margin: 10px auto;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0%);
        width: 96%;
        border-radius: 15px !important;
        background: #ffffffcc;
        backdrop-filter: blur(4px);
      }

      :global(.detail-card-place-map-body) {
        padding: 16px;
      }

      :global(.detail-card-place-map-header) {
        background: transparent;
        padding: 14px 14px 0 14px;
        border-bottom: 0;
        border-top-left-radius: 15px!important;
        border-top-right-radius: 15px!important;
      }

      :global(.ant-message .anticon) {
        vertical-align: text-bottom;
      }

      /*GOOGLE MAPS*/
      :global(.pac-container) {
        box-shadow: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
      }
      :global(.pac-item) {
        cursor: pointer;
        padding: 5px!important;
      }
      :global(.pac-logo:after) {
        display: none;
      }
      :global(.gm-ui-hover-effect) {
        // display: none !important;
      }
      :global(.gm-style-iw-d) {
        // overflow: hidden !important;
      }
      :global(.gm-style .gm-style-iw-c) {
        // padding: 0px;
        top: 40px;
      }
      :global(.gm-style .gm-style-iw-t::after) {
        top: 38px;
      }
      :global(.gmnoprint > div) {
        border-radius: 5px !important;
      }
      :global(.gm-control-active.gm-fullscreen-control) {
        border-radius: 5px !important;
      }
      :global(.gm-style-pbc){
        opacity: 0 !important;
      }
      /*GOOGLE MAPS*/
`

export default style
