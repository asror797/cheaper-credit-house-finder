# Cheaper Credit & Suitable House Finder

Welcome to the Cheaper Credit & Suitable House Finder project! This project aims to help users find affordable housing options while also providing information on local banks offering competitive credit options.

## Technologies Used

This project is built using the following technologies:

- Node.js
- PostgreSQL

## Database Schema

### Companies

The `companies` table stores information about the companies involved in managing housing complexes.

- **company_id**: An auto-incrementing integer representing the unique identifier for each company.
- **company_name**: A string (up to 32 characters) representing the name of the company. This field cannot be null.

### Complexes

The `complexes` table contains details about different housing complexes.

- **complex_id**: An auto-incrementing integer serving as the unique identifier for each housing complex.
- **complex_name**: A string (up to 32 characters) representing the name of the housing complex. This field cannot be null.
- **house_price**: An integer indicating the price of a house in the complex.
- **company_id**: An integer referencing the `company_id` from the `companies` table, representing the company associated with the housing complex. This field cannot be null.

### Houses

The `houses` table stores information about individual houses within housing complexes.

- **house_id**: An auto-incrementing integer serving as the unique identifier for each house.
- **house_room**: A small integer representing the number of rooms in the house. This field cannot be null.
- **house_price**: An integer indicating the price of the house.
- **complex_id**: An integer referencing the `complex_id` from the `complexes` table, indicating the housing complex to which the house belongs. This field cannot be null.

### Banks

The `banks` table holds data about banks offering credit options.

- **bank_id**: An auto-incrementing integer serving as the unique identifier for each bank.
- **bank_name**: A string (up to 32 characters) representing the name of the bank. This field cannot be null.
- **max_kredit**: An integer indicating the maximum credit amount offered by the bank.
- **kredit_duration**: An integer indicating the duration (in months) of the credit.

