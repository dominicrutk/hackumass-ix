
export function getApiUrl() {
  if(process.env.NODE_ENV === "production") {
    return "https://ec2-3-138-61-140.us-east-2.compute.amazonaws.com";
  }
  return "http://localhost:8080";
}