// import React from 'react';
import React, { Component } from 'react';
import '../App.css';
import usecasesConfig from '../utils/usecases-config.json';
import Select from 'react-select';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      option: '',
      selectedObj: {},
      dropdownOptions: [],
    };
  }

  componentWillMount() {
    let { name } = this.props;
    let configObj = usecasesConfig[name] || {};
    let dropdownOptions = Object.keys(configObj).map((option) => {
      return { label: option, value: option };
    });
    this.setState({
      dropdownOptions,
      option: dropdownOptions[Object.keys(dropdownOptions)[0]] || {},
      selectedObj: configObj[Object.keys(configObj)[0]] || {},
    });
  }

  render() {
    let { name } = this.props;
    let configObj = usecasesConfig[name] || {};

    let changeUseCase = (option) => {
      let { value } = option || {};
      this.setState({ option });
      value && this.setState({ selectedObj: configObj[value] });
    };

    return (
      <section className="w-2/3 pl-4 pt-4">
        <p className="mb-4">
          Please choose your usecases in the below dropdown
        </p>
        <Select
          placeholder="Choose your use case"
          isClearable
          isSearchable
          value={this.state.option}
          options={this.state.dropdownOptions}
          onChange={changeUseCase}
          className="w-3/5 cursor-pointer"
        />
        <br />
        <p className="mb-4">
          <b>code:</b>
        </p>
        <pre className="bg-black p-4 text-white">
          {this.state.selectedObj.code}
        </pre>
        <br />
        <p className="mb-4">
          <b>Explanation:</b>
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: this.state.selectedObj.explanation,
          }}
          class="explanation"
        ></p>
      </section>
    );
  }
}

export default Body;
