$strconn = "Data Source=" + $args[0] + ";Initial Catalog=" + $args[1] + ";Integrated Security=True;TrustServerCertificate=true"
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet tool install --global dotnet-ef
dotnet ef dbcontext scaffold $strconn Microsoft.EntityFrameworkCore.SqlServer --force -o Model

# CT-C-0018A\SQLEXPRESS Reddit