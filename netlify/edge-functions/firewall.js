export default async (request, context) => {
  
  if (host === "docs-staging.canary.tools") {
    // Tailscale exit nodes
    const allowedCIDRs = [
      "3.10.136.218/32",
      "18.202.69.244/32",
      "3.7.157.156/32",
      "34.248.192.232/32",
      "13.245.103.199/32",
      "3.89.34.184/32",
    ];

    const clientIP = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (!clientIP || !allowedCIDRs.some(cidr => ipInCIDR(clientIP, cidr))) {
      return new Response("Access Denied\n", { status: 403 });
    }
  }

  return context.next();
};

function ipToInt(ip) {
  return ip.split('.').reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0) >>> 0;
}

function ipInCIDR(ip, cidr) {
  const [range, bits = '32'] = cidr.split('/');
  const ipInt = ipToInt(ip);
  const rangeInt = ipToInt(range);
  const mask = ~(2 ** (32 - bits) - 1) >>> 0;
  return (ipInt & mask) === (rangeInt & mask);
}