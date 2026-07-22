import Container from "./Container";

function Header() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-600">
            ZenTask
          </h1>

          <p className="text-sm text-slate-500">
            Production Task Manager
          </p>
        </div>
      </Container>
    </header>
  );
}

export default Header;