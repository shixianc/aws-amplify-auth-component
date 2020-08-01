/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCredential = /* GraphQL */ `
  query GetCredential($id: ID!) {
    getCredential(id: $id) {
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      id
      credentialName
      isVerified
      expierationDate
    }
  }
`;
export const listCredentials = /* GraphQL */ `
  query ListCredentials(
    $filter: ModelCredentialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCredentials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        credentialName
        isVerified
        expierationDate
      }
      nextToken
    }
  }
`;
export const getFacilityProfile = /* GraphQL */ `
  query GetFacilityProfile($id: ID!) {
    getFacilityProfile(id: $id) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      about
      rating
      license
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      practiceName
      isVerified
    }
  }
`;
export const listFacilityProfiles = /* GraphQL */ `
  query ListFacilityProfiles(
    $filter: ModelFacilityProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilityProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        about
        rating
        license
        practiceName
        isVerified
      }
      nextToken
    }
  }
`;
export const getProfessionalProfile = /* GraphQL */ `
  query GetProfessionalProfile($id: ID!) {
    getProfessionalProfile(id: $id) {
      id
      user {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      firstName
      lastName
      yearsOfExperience
      workExperience {
        id
        startDate
        endDate
        isCurrentJob
        title
        company
      }
      education {
        id
        school
        degree
        graduationDate
        isCurrentStudent
      }
      rating
      credentials {
        id
        credentialName
        isVerified
        expierationDate
      }
      jobs {
        nextToken
      }
      reviews {
        nextToken
      }
      isVerified
      specialties
    }
  }
`;
export const listProfessionalProfiles = /* GraphQL */ `
  query ListProfessionalProfiles(
    $filter: ModelProfessionalProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessionalProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        yearsOfExperience
        rating
        isVerified
        specialties
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      poster {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      professionalClass
      startDate
      endDate
      statTime
      endTime
      status
      applications {
        nextToken
      }
      hired {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      cost
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        professionalClass
        startDate
        endDate
        statTime
        endTime
        status
        cost
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      author {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      posting {
        id
        professionalClass
        startDate
        endDate
        statTime
        endTime
        status
        cost
      }
      rating
      highlights
      description
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        highlights
        description
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      address
      zipcode
      OnboardStatus
      city
      state
      picture {
        bucket
        region
        key
      }
      userClass
      facilityProfile {
        id
        about
        rating
        license
        practiceName
        isVerified
      }
      professionalProfile {
        id
        firstName
        lastName
        yearsOfExperience
        rating
        isVerified
        specialties
      }
      credentialName {
        id
        credentialName
        isVerified
        expierationDate
      }
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        address
        zipcode
        OnboardStatus
        city
        state
        userClass
        owner
      }
      nextToken
    }
  }
`;
