import { log, debug } from "../ptu.js";
import { getRandomIntInclusive } from '../utils/generic-helpers.js';

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {FormApplication}
 */
export class PTURestForm extends FormApplication {

    /** @override */
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["ptu", "sidebar", "rest", "rest-form"],
        template: "systems/ptu/templates/forms/resting-form.hbs",
        width: 650,
        height: 375,
        title: "Resting Form",
        tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "stats" }]
      });
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    getData() {
      const data = super.getData();
      data.dtypes = ["String", "Number", "Boolean"];

      return data;
    }

    /** @override */
    render(force=false, options={}) {
      if($('.rest-form').length > 0) return;

      this._render(force, options).catch(err => {
        err.message = `An error occurred while rendering ${this.constructor.name} ${this.appId}: ${err.message}`;
        console.error(err);
        this._state = Application.RENDER_STATES.ERROR;
      });
      
      return this;  
    }

    /* -------------------------------------------- */
    
    /** @override */
    async _updateObject(event, formData) {
      debug(event,formData);
    }
}
