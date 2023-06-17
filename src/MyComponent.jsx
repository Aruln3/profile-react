import React from 'react';

const MyComponent = () => {
  const opensDialog = () => {
    const dialog = document.getElementById("sharesDialog");
    dialog.showModal();
  };
 
  const closesDialog = () => {
    const dialog = document.getElementById("sharesDialog");
    dialog.close();
  };

  const copysLink = () => {
    const linkInput = document.getElementById("SharesLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!"); 
  };

  const openDialog = () => {
    const dialog = document.getElementById("shareDialog");
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.getElementById("shareDialog");
    dialog.close();
  };

  const copyLink = () => {
    const linkInput = document.getElementById("ShareLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
  };

  const openbeDialog = () => {
    const dialog = document.getElementById("SharebeDialog");
    dialog.showModal();
  };

  const closebeDialog = () => {
    const dialog = document.getElementById("SharebeDialog");
    dialog.close();
  };

  const copybeLink = () => {
    const linkInput = document.getElementById("SharebeLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
  };


  const openresDialog = () => {
    const dialog = document.getElementById("ShareresDialog");
    dialog.showModal();
  };

  const closeresDialog = () => {
    const dialog = document.getElementById("ShareresDialog");
    dialog.close();
  };

  const copyresLink = () => {
    const linkInput = document.getElementById("ShareresLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied to clipboard!");
  };




  return (
    <div>
      <>
        <div className="sc-bdfBwQ dLqIok snipcss-T6IPG">
          <div className="sc-bdfBwQ sc-jJEJSO bSEBXr fcnSrV"></div>
          <button data-testid="SharesLink" onClick={opensDialog}>
            {/* <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="false"
              aria-labelledby="ltclid117235_title "
            >
              <title id="ltclid117235_title">Share</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
                fill="currentColor"
              ></path>
            </svg> */}
          </button>
        </div>
        <dialog id="sharesDialog">
          <button className="close-button dialog" onClick={closesDialog}>
            X
          </button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <input
              style={{
                fontSize: 16,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                textAlign: 'center',
                height: 40,
                marginBottom: 16,
              }}
              type="text"
              id="SharesLink"
              readOnly=""
              defaultValue="https://bit.ly/arul-d"
            />
            <button
              className="copy"
              style={{ fontSize: 16, borderBottomRightRadius: 5 }}
              onClick={copysLink}
            >
              Copy
            </button>
          </div>
        </dialog>

        {/*    ---------------------- */}

        <div className="sc-bdfBwQ sc-gsTCUz dTcluo bhdLno">
          <div className="eZNKTD">
            <img
              src="https://i.postimg.cc/3xwZNCwQ/gray.png"
              alt=""
              role="presentation"
              data-testid="ProfileImage"
              className="sc-iBPRYJ flTywP sc-hBEYos czEoCL"
              filter="none"
            />
          </div>
          <div className="sc-bdfBwQ sc-kstrdz llgrqs btjemE">
            <h1 id="profile-arul-d" className="sc-dlfnbm kmKxgd">
              Arul D
            </h1>
          </div>
        </div>
        <div className="jrDHLp">
          <div className="mb-4">
            <h3 id="header-88137993" className="sc-dlfnbm irZGsh">
              Frontend Developer | UI/UX
            </h3>
          </div>
          <div data-id={87332777} className="sc-bdfBwQ pkAuV">
            <div
              id={87332777}
              className="sc-bdfBwQ sc-iUuytg jAmcnV esdhrP"
            ></div>
            <div className="sc-gWHgXt ikxKmn">
              <div className="sc-jcVebW hrCIoP style-3zenK" id="style-3zenK">
                <button tabIndex={-1} className="sc-citwmv kajamm">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" "
                    role="img"
                    aria-hidden="false"
                    aria-labelledby="ltclid117234_title "
                  >
                    <title id="ltclid117234_title">Share</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="sc-cBNfnY cHGPOa style-s53Fs" id="style-s53Fs">
                <div
                  data-testid="StyledContainer"
                  className="sc-bdfBwQ sc-bBXqnf eua-dhZ ggtBko group"
                >
                  <a
                    href="https://github.com/Aruln3"
                    target="_blank"
                    rel="noopener"
                    data-testid="LinkButton"
                    className="github-button sc-pFZIQ sc-fKFyDc ldGKnQ hzhcpT group"
                    aria-describedby="profile-arul-d header-88137993"
                    height="auto"
                  >
                    <div
                      data-testid="LinkThumbnail"
                      className="sc-bdfBwQ sc-gsTCUz sc-hHftDr dgVnpq bhdLno lotISG"
                    ></div>
                    <p className="sc-hKgILt sc-jNMdTA gXKGT kFCyzt">GitHub</p>
                  </a>
                  <button
                    data-testid="ShareLink"
                    className="sc-bZSQDF kMtULL share-link-icon"
                    onClick={openDialog}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" "
                      role="img"
                      aria-hidden="false"
                      aria-labelledby="ltclid117235_title "
                    >
                      <title id="ltclid117235_title">Share</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <dialog id="shareDialog">
                <button className="close-button dialog" onClick={closeDialog}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#000000"
                      d="M19.2 6.8l-1.4-1.4L12 10.6 6.2 4.8 4.8 6.2 10.6 12l-5.8 5.8 1.4 1.4L12 13.4l5.8 5.8 1.4-1.4L13.4 12l5.8-5.8z"
                    />
                  </svg>
                </button>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <input
                    style={{
                      fontSize: 16,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                      borderBottomLeftRadius: 25,
                      textAlign: 'center',
                      height: 40,
                      marginBottom: 16,
                    }}
                    type="text"
                    id="ShareLink"
                    readOnly=""
                    defaultValue="https://github.com/Aruln3"
                  />
                  <button
                    className="copy"
                    style={{ fontSize: 16, borderBottomRightRadius: 5 }}
                    onClick={copyLink}
                  >
                    Copy
                  </button>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        <title id="ltclid117234_title">Share</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
          fill="currentColor"
        ></path>
        <div className="sc-cBNfnY cHGPOa style-s53Fs" id="style-s53Fs">
          <div
            data-testid="StyledContainer"
            className="sc-bdfBwQ sc-bBXqnf eua-dhZ ggtBko group"
          >
            <a
              href="https://www.behance.net/Arul-"
              target="_blank"
              rel="noopener"
              data-testid="LinkButton"
              className="github-button sc-pFZIQ sc-fKFyDc ldGKnQ hzhcpT group"
              aria-describedby="profile-arul-d header-88137993"
              height="auto"
            >
              <div
                data-testid="LinkThumbnail"
                className="sc-bdfBwQ sc-gsTCUz sc-hHftDr dgVnpq bhdLno lotISG1"
              ></div>
              <p className="sc-hKgILt sc-jNMdTA gXKGT kFCyzt">Behance</p>
            </a>
            <button
              data-testid="SharebeLink"
              className="sc-bZSQDF kMtULL share-link-icon"
              onClick={openbeDialog}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
                role="img"
                aria-hidden="false"
                aria-labelledby="ltclid117235_title "
              >
                <title id="ltclid117235_title">Share</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
                  fill="currentColor"
                ></path> 
              </svg>
            </button>
          </div>
        </div>
        <dialog id="SharebeDialog">
          <button className="close-button dialog" onClick={closebeDialog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M19.2 6.8l-1.4-1.4L12 10.6 6.2 4.8 4.8 6.2 10.6 12l-5.8 5.8 1.4 1.4L12 13.4l5.8 5.8 1.4-1.4L13.4 12l5.8-5.8z"
              />
            </svg>
          </button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <input
              style={{
                fontSize: 16,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                textAlign: 'center',
                height: 40,
                marginBottom: 16,
              }}
              type="text"
              id="SharebeLink"
              readOnly=""
              defaultValue="https://www.behance.net/Arul-"
            />
            <button
              className="copy"
              style={{ fontSize: 16, borderBottomRightRadius: 5 }}
              onClick={copybeLink}
            >
              Copy
            </button>
          </div>
        </dialog>



        {/*           *****                   */}


        <title id="ltclid117234_title">Share</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
          fill="currentColor"
        ></path>
        <div className="sc-cBNfnY cHGPOa style-s53Fs" id="style-s53Fs">
          <div
            data-testid="StyledContainer"
            className="sc-bdfBwQ sc-bBXqnf eua-dhZ ggtBko group"
          >
            <a
              href="https://bit.ly/Arul_Resume"
              target="_blank"
              rel="noopener"
              data-testid="LinkButton"
              className="github-button sc-pFZIQ sc-fKFyDc ldGKnQ hzhcpT group"
              aria-describedby="profile-arul-d header-88137993"
              height="auto"
            >
              <div
                data-testid="LinkThumbnail"
                className="sc-bdfBwQ sc-gsTCUz sc-hHftDr dgVnpq bhdLno lotISG2"
              ></div>
              <p className="sc-hKgILt sc-jNMdTA gXKGT kFCyzt">Resume</p>
            </a>
            <button
              data-testid="ShareresLink"
              className="sc-bZSQDF kMtULL share-link-icon"
              onClick={openresDialog}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
                role="img"
                aria-hidden="false"
                aria-labelledby="ltclid117235_title "
              >
                <title id="ltclid117235_title">Share</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6464 3.85353L11 4.20708L11.7071 3.49998L11.3536 3.14642L8.35355 0.146423H7.64645L4.64645 3.14642L4.29289 3.49998L5 4.20708L5.35355 3.85353L7.5 1.70708V9.49998V9.99998H8.5V9.49998V1.70708L10.6464 3.85353ZM1 5.5L1.5 5H4V6H2V15H14V6H12V5H14.5L15 5.5V15.5L14.5 16H1.5L1 15.5V5.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <dialog id="ShareresDialog">
          <button className="close-button dialog" onClick={closeresDialog}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M19.2 6.8l-1.4-1.4L12 10.6 6.2 4.8 4.8 6.2 10.6 12l-5.8 5.8 1.4 1.4L12 13.4l5.8 5.8 1.4-1.4L13.4 12l5.8-5.8z"
              />
            </svg>
          </button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <input
              style={{
                fontSize: 16,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                borderBottomLeftRadius: 25,
                textAlign: 'center',
                height: 40,
                marginBottom: 16,
              }}
              type="text"
              id="ShareresLink"
              readOnly=""
              defaultValue="https://bit.ly/Arul_Resume"
            />
            <button
              className="copy"
              style={{ fontSize: 16, borderBottomRightRadius: 5 }}
              onClick={copyresLink}
            >
              Copy
            </button>
          </div>
        </dialog>



        <div class="gap"></div>





        <div className="sc-bdfBwQ XXzWu">
          <div className="sc-bdfBwQ sc-gsTCUz cUWRuD bhdLno">
            <a
              target="_blank"
              rel="noopener"
              data-testid="SocialIcon"
              href="https://bit.ly/whatsapp-arul"
              aria-label="Arul D whatsapp"
              className="sc-eCssSg lbrsth sc-fodVxV cYLuAZ"
            >
              <svg
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="sc-gKsewC edUYGH"
              >
                <title data-testid="svgTitle" id="title_0.819928477046231">
                  whatsapp
                </title>
                <g>
                  <path d="M18.8,14.634a1.361,1.361,0,0,0-.645-.477l-.165-.081c-.018-.009-1.845-.917-2.208-1.049a.983.983,0,0,0-1.3.349c-.177.266-.721.914-.918,1.2a.409.409,0,0,1-.125-.049c-.058-.028-.137-.063-.233-.105a7.636,7.636,0,0,1-2.2-1.387,12.737,12.737,0,0,1-1.683-2.008.766.766,0,0,1,.086-.093c.1-.1.223-.248.342-.392l.159-.191a2.247,2.247,0,0,0,.338-.538l.044-.09a1.064,1.064,0,0,0-.026-1c-.057-.116-.35-.835-.616-1.481L9.31,6.408a1.123,1.123,0,0,0-1.146-.849c-.192-.01-.412-.012-.63-.012a1.724,1.724,0,0,0-1.269.62A3.989,3.989,0,0,0,5.087,9.074a6.653,6.653,0,0,0,1.435,3.631,14.178,14.178,0,0,0,5.546,4.857,18.659,18.659,0,0,0,1.846.682,4.476,4.476,0,0,0,1.373.208,5.741,5.741,0,0,0,.84-.065,3.729,3.729,0,0,0,2.526-1.826,2.85,2.85,0,0,0,.142-1.927Zm-1.084,1.59A2.852,2.852,0,0,1,15.978,17.4a3.837,3.837,0,0,1-1.762-.107,17.989,17.989,0,0,1-1.752-.647,13.168,13.168,0,0,1-5.122-4.512l-.071-.1A5.548,5.548,0,0,1,6.087,9.074a3.06,3.06,0,0,1,.974-2.295.654.654,0,0,1,.473-.232c.2,0,.4,0,.579.011h0l.133-.01a.685.685,0,0,1,.139.244l.341.827c.279.68.592,1.438.647,1.548.04.079.033.091.026.1l-.048.1a1.323,1.323,0,0,1-.2.327L8.98,9.9c-.1.117-.19.234-.275.318a.957.957,0,0,0-.217,1.249,9.938,9.938,0,0,0,1.854,2.307,8.645,8.645,0,0,0,2.464,1.558c.076.034.138.06.184.083a.969.969,0,0,0,1.282-.2,9.857,9.857,0,0,0,.993-1.306,1,1,0,0,1,.17.051c.229.084,1.6.75,2.1,1l.177.087c.067.032.144.069.2.1A3.126,3.126,0,0,1,17.711,16.224Z"></path>
                  <path d="M12,1A11,11,0,0,0,2.792,18.014l-.974,3.711a.5.5,0,0,0,.61.61l3.779-.991A11,11,0,1,0,12,1Zm0,21a9.961,9.961,0,0,1-5.437-1.614.493.493,0,0,0-.4-.064L3,21.151l.814-3.1a.5.5,0,0,0-.071-.41A10,10,0,1,1,12,22Z"></path>
                </g>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener"
              data-testid="SocialIcon"
              href="https://bit.ly/instagram-arul"
              aria-label="Arul D instagram"
              className="sc-eCssSg lbrsth sc-fodVxV cYLuAZ"
            >
              <svg
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="sc-gKsewC edUYGH"
              >
                <title data-testid="svgTitle" id="title_0.9915357004862551">
                  instagram
                </title>
                <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path>
                <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path>
                <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener"
              data-testid="SocialIcon"
              href="https://bit.ly/Arul-LinkedIn"
              aria-label="Arul D linkedin"
              className="sc-eCssSg lbrsth sc-fodVxV cYLuAZ"
            >
              <svg
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="sc-gKsewC edUYGH"
              >
                <title data-testid="svgTitle" id="title_0.5085628842983196">
                  linkedin
                </title>
                <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path>
                <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path>
                <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener"
              data-testid="SocialIcon"
              href="mailto:aruln311@gmail.com"
              aria-label="Arul D email address"
              className="sc-eCssSg lbrsth sc-fodVxV cYLuAZ"
            >
              <svg
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="sc-gKsewC edUYGH"
              >
                <title data-testid="svgTitle" id="title_0.9681287446056999">
                  email
                </title>
                <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyComponent;
