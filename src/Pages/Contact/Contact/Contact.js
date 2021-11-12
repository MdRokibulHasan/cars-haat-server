import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h3>Get In Touch</h3>
      <div>
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </div>

      <div className="row py-5">
        <div className="col-lg-5 col-md-5 col-12">
          <div>
            <h5>HQ Address</h5>
            <p>9868 Forest Avenue Pompano Beach, FL 33060</p>
          </div>

          <div>
            <h5>Toll-Free No.</h5>
            <p>1800 123 1800</p>
          </div>

          <div>
            <h5>Fax</h5>
            <p>1800 123 1800</p>
          </div>

          <div>
            <h5>Email.</h5>
            <p>1800 123 1800</p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-12">
          <div class="form-group">
            <textarea
              class="form-control"
              placeholder="Enter Messages"
            //   onChange={handelMessages}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            <div class="row my-3">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                //   onChange={hadelname}
                  placeholder="Enter Name "
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                //   onChange={handelemail}
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <input
              type="text"
              className="my-3 form-control"
            //   onChange={handelSubject}
              placeholder="Enter Subject"
            />
            <div className="getintouchtitle py-2">
              <button
                type="button"
                // onChange={handelsentdata}
                class="btn btn-primary btn-lg w-25"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
