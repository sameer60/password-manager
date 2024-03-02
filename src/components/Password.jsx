/* eslint-disable react/prop-types */
const Password = (props) => {
  const handleDeleteBtnclick = () =>
    props.handleDeletePassword(props.passwordDetails.id);
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full w-full flex items-center bg-yellow-50 border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className=" w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src="https://dummyimage.com/80x80"
        />
        <div className="flex flex-col justify-center flex-grow">
          <h2 className="text-gray-900 p-2 title-font font-medium">
            {props.passwordDetails.username}
          </h2>
          <p className="text-gray-500 p-2">{props.passwordDetails.password}</p>
          <p className="text-gray-400 p-2">
            {props.passwordDetails.websiteName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Password;
