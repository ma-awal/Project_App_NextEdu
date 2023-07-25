import React from 'react';
import './SearchResult.css';
import Table from 'react-bootstrap/Table';
const SearchResult = () => {
  return (
    <div className="SearchResult">
      <div className="heading mb-3 mb-lg-4 text-center">
        <h2>Search Your Result</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          est eum quia eos <br />
          illum mollitia, delectus eveniet laboriosam molestias omnis neque.
        </p>
      </div>
      <div className="row search-input justify-content-center  mb-3 mb-md-4 mb-lg-5 ">
        <div class=" col-12 col-md-6 col-lg-3  ">
          <div className=" ">
            <select class="form-select  rounded-0 " name="" id="">
              <option value="1">Department One</option>
              <option value="">Department Two</option>
              <option value="">Department There</option>
            </select>
          </div>
        </div>
        <div class=" col-12 col-md-6 col-lg-3  ">
          <div className=" ">
            <select class="form-select  rounded-0 " name="" id="">
              <option value="1">2022</option>
              <option value="">2023</option>
              <option value="">2021</option>
            </select>
          </div>
        </div>

        <div class=" col-12 col-md-6 col-lg-3 ">
          <div className=" ">
            <input
              type="Id"
              className="form-control rounded-0"
              placeholder="ID Number"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3  ">
          <div className=" ">
            <input
              type="Id"
              className="form-control rounded-0"
              placeholder="Registration Number"
            />
          </div>
        </div>
        <div className="search-btn d-block w-100 text-center mt-3 mt-lg-4">
          <button className=" rounded-0 btn" type="submit">
            Search Now
          </button>
        </div>
      </div>
      <div className="gap  border-bottom mb-5 "></div>
      <div className="row   ">
        <ShowResult />
      </div>
    </div>
  );
};

const ShowResult = () => {
  return (
    <div className="text-center py-3 show-result ">
      <h2 className="mb-3 mb-md-4 mb-lg-5">Here Your Result</h2>
      <Table striped bordered hover variant=" light" className="f-table">
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Credits</th>
            <th>Terms</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Computer Science</td>
            <td>A+</td>
            <td>5:00</td>
            <td>Fall 2022</td>
          </tr>
          <tr>
            <td>Computer Science</td>

            <td>A-</td>
            <td>5:00</td>
            <td>Fall 2022</td>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>A-</td>
            <td>5:00</td>
            <td>Fall 2022</td>
          </tr>
          <tr>
            <td>Computer Science</td>

            <td>A-</td>
            <td>5:00</td>
            <td>Fall 2022</td>
          </tr>
          <tr>
            <td>Computer Science</td>
            <td>A-</td>
            <td>5:00</td>
            <td>Fall 2022</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default SearchResult;
