import Head from "next/head";
import { useEffect, useRef } from "react";

import { FaTh } from "react-icons/fa";

export default function Fig() {
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <Head>
        <title>Fig | The Power of Everything</title>

        <link
          rel="shortcut icon"
          href="https://api.statvoo.com/favicon/?url=https://fig.io/"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {/* header */}
      <div className="fixed top-0 right-0 flex flex-row p-10 justify-end space-x-2">
        <span className="p-2 rounded-full hover:cursor-pointer hover:bg-slate-200 ">
          <FaTh className="ml-auto text-md text-slate-400" />
        </span>

        <img
          className="rounded-full shadow-lg"
          src="https://lh3.googleusercontent.com/fife/AAWUweVw1nKpPc_Q0FtNJQKi1xg6DBlirOq1ouP_Nbx9kIX2Q-h5q9wpra5k3p5xOo0QQOMvrwRVk07RdbWnEIEFW05sm_eFKamDV63uyJGRfdcChrN-CLhtV8CsDSLjJ_ezrJnH6i2yD8OJrhezUZvQvFW6J09R1HOmjCDrqrtxQmeK38mx6Q7F0Y9Z3r7sRpddR_EjUIEiK0ooHFyX3lLvy19xL_nJQKhgtsoc6EtECZ9dKX2a6P-WIF_bKC7OZRiuwsGSU0Yf1HyCz0W8GZIVRrhMidvofwHyQMBHeaZUiNfUYS9_VVQWGy9QnjmMgBDiCiN9Q9DfEKs-Xp0sN8WN82hj9TQWn4o2VhMnSZe79NholSsF4PAGUPZAoJAzNQcatVeuOwiEUm2K5QROHe-jo8SMU4oPwqhiOkA1kVuAbfZN0fBko2Dl2lCp63g-2guEhtPSFv7Arh0GbbAUZuKdeu9w64sjZP_dvr0NHjAywN7zPTauJgf95WnF2J_-yFN5016pOyDrgto02wft3-jbM2UYA8c0AA-4befSIN-OBMS80xo7A1ISI93UdXuETPG7CeaSWKGkqJjcXPQXbddYdPu7H0w4imw_GPSs8cgWKtJgm5Jke4ASwVTXBHbVioUQxYJbFWr4WiqkjT5D8CdiqymppgbxsI-mZLr85ZeTrpflDeOM1MWUrlbCCw2kSanAfpomYIz5eHxOsIBDzIUYB897tYcHF93TtxHD-RUDil5jz1E=s32-c"
        />
      </div>

      <main className="container mx-auto flex flex-col justify-center h-screen">
        <div
          className="flex flex-row my-auto mx-auto w-[25rem] 
        items-center justify-start space-x-5 border bg-slate-50 p-3 px-5 rounded-full"
        >
          <img
            ref={inputRef}
            className=""
            height={30}
            width={30}
            src="https://api.statvoo.com/favicon/?url=https://fig.io/"
          />

          <input
            className="placeholder:text-slate-300 text-slate-600 text-md font-bold outline-none  bg-slate-50"
            placeholder="power to do"
          />
        </div>
      </main>
    </>
  );
}
