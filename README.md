<p align="center"><a href="https://www.codechefvit.com" target="_blank"><img src="https://i.ibb.co/4J9LXxS/cclogo.png" width=160 title="CodeChef-VIT" alt="Codechef-VIT"></a>
</p>

<h2 align="center">Contactify</h2>
<br/>

> <p>The Contact File Service offers a seamless solution for users to upload contact information in various formats (CSV, XLSX, or XLS). Upon submission, the backend processes this data, extracting details such as names, phone numbers, emails, and genders. It compiles this information into a virtual contact file (VCF file) compatible with Android and iOS devices, simplifying contact management.</p>

## 🌐 Deploy

[https://contactify.codechefvit.com/](https://contactify.codechefvit.com/)

## ⚙️ Tech Stack:

- Next.js
- TypeScript
- Tailwind CSS

## 🖼 Screenshots

<p align="center">
	<img width="1440" alt="image" src="https://github.com/CodeChefVIT/contactify-frontend/blob/master/screenshots/Screenshot%202024-09-04%20224539.png?raw=true">
	<img width="1440" alt="image" src="https://github.com/CodeChefVIT/contactify-frontend/blob/master/screenshots/Screenshot%202024-09-04%20224613.png?raw=true">
	<img width="1440" alt="image" src="https://github.com/CodeChefVIT/contactify-frontend/blob/master/screenshots/Screenshot%202024-09-04%20224631.png?raw=true">
</p>

## 🏁 Get Started

Follow these steps to set up and run the Contact File Backend Service locally:

1. Local Installation

   1. **Clone the Repository**

      - Clone the repository.
        ```bash
        git clone https://github.com/CodeChefVIT/contactify-frontend.git
        ```
      - Navigate to the cloned directory and run
        ```bash
        cd contactify-frontend/frontend
        ```

   2. **Install Dependencies**

      - Install all required dependencies for running the server on local machine
        ```bash
        npm install
        ```

   3. **Configuration**

      - Create a `.env` file in the root directory.
      - Define environment variables as in `.env.example`.

   4. **Build the website**
      ```bash
      npm run build
      ```
   5. **Start the Server**
      - Start the server using
        ```bash
        npm start
        ```
      - The service will be running on `http://localhost:3000` by default.

2. Backend Installation
   - Follow the steps on https://github.com/CodeChefVIT/contactify-backend to set up the backend service.

## ✨ Features

### File Upload Prompt

- Enables users to upload contact files in various formats (CSV, XLSX, XLS) effortlessly.

### Automatic Header Extraction

- Identifies and extracts headers from uploaded files to assist in contact data organization.

### Header Mapping Interface

- Provides a user-friendly interface for mapping extracted headers to predefined contact fields like first name, middle name, last name, gender, phone number, and email for accurate data categorization.

### Custom Data Handling Options

- **Row Filtering**: Allows skipping rows without a phone number or with insufficient phone number digits.
- **Data Validation**: Offers options to set criteria for data inclusion, ensuring accuracy and completeness.

### Contact File Generation Options

- **Unified VCF File**: Generates a single VCF file containing all organized contact information.
- **Individual Contact Files**: Provides flexibility to receive contacts as separate files bundled together in a convenient zip format.

## 📝 Checkout:

- Contactify Backend: [https://github.com/CodeChefVIT/contactify-backend](https://github.com/CodeChefVIT/contactify-backend)

## 🚀 Contributors

<table>
<tr align="center">
<td>
	<p align="center">
		<img src = "https://avatars.githubusercontent.com/u/91564450?v=4" width="200" height="200" alt="profilepic" style="border: 2px solid grey; width: 170px; height:170px">
	</p>
	<p style="font-size:17px; font-weight:600;">Aaditya Mahanta</p>
	<p align="center">
		<a href = "https://github.com/aditansh"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/></a>
		<a href = "https://www.linkedin.com/in/aadityamahanta/">
			<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
		</a>
	</p>
</td>
</tr>
</table>

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

<p align="center">
	Made with :heart: by <a href="https://www.codechefvit.com" target="_blank">CodeChef-VIT</a>
</p>
