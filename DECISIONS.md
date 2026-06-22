# Engineering Decision Log

## 1. Why did you choose this technology stack?

I chose the MERN stack (MongoDB, Express.js, React.js, Node.js) because it allows rapid full-stack development using JavaScript across both frontend and backend. React provides reusable UI components, Express and Node.js simplify API development, and the ecosystem offers many libraries that speed up development and deployment.

Additionally, I am already comfortable with this stack, which allowed me to focus more on product quality and features instead of learning new technologies during the assignment.

---

## 2. Why did you choose this database?

I chose MongoDB because feedback data is relatively simple and document-oriented. MongoDB provides:

* Flexible schema design
* Fast development iteration
* Easy aggregation for analytics
* Simple integration with Mongoose

The application did not require complex relational joins, making MongoDB a practical choice.

---

## 3. Why did you structure your application this way?

I followed a layered architecture:

### Frontend

* Components
* Pages
* Services
* Hooks
* Layouts

### Backend

* Routes
* Controllers
* Models
* Middleware
* Utilities

This structure improves:

* Maintainability
* Reusability
* Separation of concerns
* Scalability for future features

---

## 4. What trade-offs did you make due to time constraints?

Due to time limitations, I made the following trade-offs:

* Basic authentication instead of full RBAC.
* Simple notification system.
* Limited automated testing.
* No Redis caching layer.
* Simple CSV export instead of advanced reporting.
* Minimal dashboard customization.

I prioritized delivering a complete and working product over implementing every possible enhancement.

---

## 5. What would you improve if you had one more week?

If I had one more week, I would implement:

* PDF export functionality
* Real-time notifications using WebSockets
* Docker-based deployment
* Unit and integration tests
* CI/CD pipeline
* Better analytics and charts
* Advanced filtering and search
* Performance optimizations and caching
* Role-based access control

---

## 6. What was the most difficult technical challenge you faced?

The most challenging part was designing the analytics dashboard and implementing dynamic filtering while keeping the UI responsive and maintaining clean state management between React components and API calls.

Another challenge was handling export functionality and ensuring backend routes and frontend services remained synchronized.

---

## 7. Which AI tools did you use?

I used:

* ChatGPT
* GitHub Copilot
* Google Gemini
* Stack Overflow for validation and community references

---

## 8. Share one instance where AI helped you.

AI helped me quickly generate initial implementations for dashboard analytics and improve CSS styling for responsive layouts, which significantly reduced development time.

---

## 9. Share one instance where you disagreed with AI and why.

AI suggested using a more complex architecture and additional libraries that would have increased project complexity. I decided to keep the implementation simpler because the assignment requirements did not justify additional dependencies.

This decision improved maintainability and reduced development time.

---

## 10. What would break first if this application suddenly had 100,000 users?

The first bottleneck would likely be:

* Database queries
* Analytics aggregation endpoints
* Single server instance limitations
* Lack of caching
* Notification queries

To support 100,000 users, I would introduce:

* Redis caching
* Database indexing
* Horizontal scaling
* Load balancers
* Queue-based background jobs
* CDN and optimized static asset delivery

---

## 11. What is one thing in this assignment that you would improve, change, or challenge?

I would add explicit performance requirements and scalability expectations. This would encourage candidates to think not only about implementation but also about production readiness, monitoring, and system design decisions.

---

# Final Thoughts

This assignment provided an excellent opportunity to demonstrate engineering thinking, product development skills, and decision-making under time constraints. I focused on building a maintainable, functional, and extensible solution while documenting the trade-offs and future improvements.
