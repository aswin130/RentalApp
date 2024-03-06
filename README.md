A A .NET Core (C#) RESTful backend service for CRUD operation using rental app as example

Technologies and Packeges:
<ol>
<li>ASP.NET Core: It is a cross-platform, high-performance framework for building web applications using C#. It provides features like routing, middleware, and dependency injection.</li>

<li>Entity Framework Core: It is an Object-Relational Mapping (ORM) framework provided by Microsoft. It simplifies database access and management by mapping database entities to C# objects.</li>

<li>SQLite: It is a lightweight, file-based database engine that is used as the database provider in this project. SQLite is commonly used in development and testing scenarios due to its simplicity and portability.</li>

<li>ASP.NET Core Identity: It is a membership system that adds authentication and authorization functionalities to ASP.NET Core applications. It provides features like user registration, login, roles, and claims management.</li>

<li>JWT Authentication: JSON Web Token (JWT) authentication is implemented using the Microsoft.AspNetCore.Authentication.JwtBearer package. JWT is a compact, URL-safe means of representing claims to be transferred between two parties.</li>

<li>Swagger/OpenAPI: Swagger/OpenAPI is used for API documentation. It provides a user-friendly interface for exploring and testing APIs. The Swashbuckle.AspNetCore package is used for integrating Swagger with ASP.NET Core applications.</li>

<li>MailKit: It is a cross-platform mail-sending library for .NET applications. It is used for sending emails in this project. MailKit supports SMTP, POP3, and IMAP protocols.</li>

<li>MimeKit: It is a .NET MIME creation and parser library. It is used in conjunction with MailKit for creating MIME messages for email communication.</li>

<li>Microsoft.Extensions.Options: It is a package that provides support for configuring options in an ASP.NET Core application. It is used for configuring email settings in this project.</li>

<li>Microsoft.IdentityModel.Tokens: It is a package that provides support for generating and validating JSON Web Tokens (JWT) in ASP.NET Core applications.</li>
</ol>
<b>Endpoints</b>

<b>performing CRUD (Create, Read, Update, Delete) operations</b>

<b>Customer controller</b> [text](http://localhost:5241/api/Customer)

<b>Roles Controller </b>  http://localhost:5241/api/roles
By using [Authorize(Roles = "Admin")] attribute on controller actions or controllers, you ensure that only users with the specified role (in this case, "Admin") can access those endpoints. This helps enforce access control based on user roles.

<b>Assign Roles</b> http://localhost:5241/api/roles/assign-role-to-user

<b>Vehicle Controller</b>   <a href=http://localhost:5241/api/vehicle>

<b>RentalOrderController</b>  <a href=http://localhost:5241/api/rentalorder>

<b>PricingController</b>  <a href=http://localhost:5241/api/pricing>

<b>LocationController</b>  <a href=[Text](http://localhost:5241/api/location)>

<b>Account Controller</b>

<b>Controller Setup:</b>

The AccountController is an API controller ([ApiController]) with a base route of "api/[controller]" specified by the [Route] attribute.
It injects dependencies such as UserManager<IdentityUser>, SignInManager<IdentityUser>, EmailService, and IConfiguration via constructor injection.

<b>Register Action:</b>

The Register action handles user registration. It creates a new IdentityUser based on the provided email and password.
Upon successful registration, it generates an email verification token, constructs a verification link, and sends a verification email using the 
EmailService.
It returns an Ok response if registration is successful, otherwise returns a BadRequest response with error details.

<b>VerifyEmail Action:</b>

The VerifyEmail action handles email verification. It confirms the email for the specified user using the verification token.
It returns an Ok response if email verification is successful, otherwise returns a BadRequest response.

<b>Login Action:</b>

The Login action handles user login. It validates the user's credentials using SignInManager<IdentityUser>.
Upon successful login, it generates a JWT token containing the user's email and roles, using the GenerateJwtToken method, and returns it as part of the response.
It returns an Unauthorized response if login fails.

<b>Logout Action:</b>

The Logout action handles user logout. It signs out the current user using SignInManager<IdentityUser> and returns an Ok response.

<b>GenerateJwtToken Method:</b>

The GenerateJwtToken method creates a JWT token containing user claims such as email and roles.
It uses a symmetric security key and specified token expiration time obtained from the configuration (IConfiguration).
The token is signed using JwtSecurityTokenHandler and returned as a string.

<b>Register the User</b> <a href=http://localhost:5241/api/account/register>

</b>Verify the User</b> <a href=http://localhost:5241/api/account/verify-email>
    GET /api/account/verify-email?userId=123&token=verificationToken123
<b>Login</b> <a href=http://localhost:5241/api/account/login)>
<b>Logout</b> <a href=(http://localhost:5241/api/account/logout)>

<b>DB Context</b>

<b>DbContext Inheritance:</b>
<ol>
<li>RentalAppContext inherits from IdentityDbContext<IdentityUser>, which means it extends the functionality provided by Entity Framework Core's DbContext class to support ASP.NET Core Identity's user management features.</li>

<li>The RentalAppContext class includes DbSet properties for each entity in the application: Customers, Locations, Pricings, RentalOrders, and Vehicles. These properties represent collections of entities that correspond to database tables.</li>

<li>OnModelCreating Method method overrides the default behavior for configuring the database model using Fluent API.
It calls the base class method and then configures additional aspects of the model.</li>
</li>The configurations include defining primary keys, unique indexes, and relationships between entities.</li>
<ol>
<b>Entity Configurations:</b>

<b>Pricing Entity:</b>
Configures a one-to-many relationship between Pricing and Vehicle entities.
Specifies that the PriceId property is the primary key.

<b>Customer Entity:</b>
Specifies a unique index on the CustomerId property to enforce uniqueness.
<b>RentalOrder Entity:</b>
Specifies a composite primary key consisting of OrderId, CustomerId, and VehicleId.
Configures one-to-many relationships between RentalOrder and Customer, and between RentalOrder and Vehicle.

ASP.NET Core controllers responsible for managing various aspects of a rental application, including customers, vehicles, pricing, orders, roles, and user authentication. Each controller implements CRUD operations, handling requests for creating, reading, updating, and deleting data. Additionally, a DbContext named RentalAppContext is discussed, configuring entity relationships, primary keys, and integrating ASP.NET Core Identity for user management. These controllers and DbContext collectively form the backend infrastructure of the rental application, ensuring efficient data management, authentication, and authorization functionalities.