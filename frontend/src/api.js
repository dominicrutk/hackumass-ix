
export function getApiUrl() {
  if(process.env.NODE_ENV === "production") {
    return "http://ec2-3-138-61-140.us-east-2.compute.amazonaws.com:8080";
  }
  return "http://localhost:8080";
}