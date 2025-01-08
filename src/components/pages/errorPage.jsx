const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-2 bg-slate-100">
      <h1 className="text-4xl font-bold text-slate-600 mb-5">Error Page</h1>
      <h1 className="text-7xl font-bold text-red-400">404!</h1>
      <h1 className="text-4xl font-bold text-slate-600">Page Not Found!!</h1>
    </div>
  );
};

export default ErrorPage;
