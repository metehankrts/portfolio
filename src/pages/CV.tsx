import pdfCV from "../assets/Metehan_Karatas_CV.pdf";

function CV() {
  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";
    iframe.src = pdfCV;

    document.body.appendChild(iframe);

    iframe.onload = () => {
      if (iframe.contentWindow) {
        iframe.contentWindow.print();
      }
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div
        className="rounded-md bg-green-400/20 px-6 py-4 my-6 sm:block cursor-pointer"
        onClick={handlePrint}
      >
        <span className="mr-2">🖨️</span> Print this page on A4 paper for a PDF
        version.{" "}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-semibold text-gray-900">
            Metehan Karataş
          </h1>
          <h2 className="text-xl font-medium text-gray-600 mt-1">
            Computer Engineer
          </h2>
        </div>
        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p className="text-gray-600">
            <span className="font-semibold">Phone:</span> +90 535 772 84 99
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> mxetehan@hotmail.com
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Location:</span> Başakşehir,
            Istanbul
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">
          Professional Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          A passionate computer engineer with expertise in software development,
          3D modeling, and mobile app development. Adept at teamwork and
          continuously striving to enhance my skill set.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">Education</h3>
        <div>
          <p className="font-semibold text-gray-800">
            Computer Engineering | 2019-2024
          </p>
          <p className="text-gray-600">
            İstanbul Kültür University - Faculty of Engineering, Ataköy
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">
          Work Experience
        </h3>

        <div className="mb-6">
          <p className="font-semibold text-gray-800">
            Part-Time Worker | 2021-2022
          </p>
          <p className="text-gray-600">Ant Insan Kaynakları</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Gained communication and teamwork skills through organizational
              activities.
            </li>
            <li>
              Adapted to various roles and improved problem-solving skills.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-800">
            Guide Application Developer
          </p>
          <p className="text-gray-600">Onbir Travel</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Developed a mobile app for exploring Turkish tourist destinations.
            </li>
            <li>Built using React Native and Supabase.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-800">
            Gym Application Developer
          </p>
          <p className="text-gray-600">Onbir Gym</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Created a mobile app for gym enthusiasts, featuring 3D visuals of
              exercises.
            </li>
            <li>Developed using React Native and Supabase.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-800">Internship | 2022</p>
          <p className="text-gray-600">Sentez Yazılım</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Worked on website development using HTML, CSS, and JavaScript.
            </li>
            <li>
              Developed Windows applications with C# and the MVC architecture.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-800">Internship | 2024</p>
          <p className="text-gray-600">
            Guru Sistem Yönetim ve Yazılım San. Tic. Ltd. Şti.
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>
              Analyzed the differences between Flutter, React Native, and Ionic.
            </li>
            <li>
              Developed mobile applications using Flutter and the Provider
              Framework.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-900 mb-4">Skills</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>English (B2)</li>
          <li>Blender (3D Modeling, Animation, Rendering, Lighting)</li>
          <li>Programming Languages: C, C++</li>
          <li>Web Technologies: HTML, CSS, JavaScript, TypeScript</li>
          <li>Frameworks & Libraries: React.js, React Native</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-medium text-gray-900 mb-4">Projects</h3>
        <a href="/projects" rel="noopener noreferrer">
          <p className="text-green-600 italic">
            Click here to see projects about programming.
          </p>
        </a>
        <a
          href="https://metekrts.artstation.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-green-600 italic">
            Click here to see projects about 3D.
          </p>
        </a>
      </div>
    </div>
  );
}

export default CV;
