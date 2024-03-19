const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://mykcro.onrender.com';

export const register = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const login = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const getAllTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
};

export const createTask = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const getTask = async (taskId) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch task");
  }

  return response.json();
};

export const updateTask = async (taskId, data) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
    method: 'PUT',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}`, {
    method: 'DELETE',
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
};

export const registerBusiness = async (data) => {
  const { serviceId, ...businessData } = data; // Destructure serviceId from data

  const response = await fetch(`${API_BASE_URL}/api/businesses`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...businessData, serviceId }) // Include serviceId in the request body
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};


export const getAllBusinesses = async () => {
  const response = await fetch(`${API_BASE_URL}/api/businesses`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch businesses");
  }

  return response.json();
};

export const getBusinessesByService = async (serviceId) => {
  const response = await fetch(`${API_BASE_URL}/api/businesses/${serviceId}`, {
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch businesses for this service');
  }

  return response.json();
};

export const registerService = async (data) => {
  const response = await fetch(`${API_BASE_URL}/api/services`, {
    method: 'POST',
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const getAllServices = async () => {
  const response = await fetch(`${API_BASE_URL}/api/services`, {
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
};

export const deleteService = async (serviceId) => {
  const response = await fetch(`${API_BASE_URL}/api/services/${serviceId}`, {
    method: 'DELETE',
    credentials: "include"
  });

  if (!response.ok) {
    throw new Error("Failed to delete service");
  }
};
