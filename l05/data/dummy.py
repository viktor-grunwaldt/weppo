import random
import datetime


def generate_log_entry():
    # Generate random IP address
    ip_address = ".".join(map(str, (random.randint(0, 255) for _ in range(4))))

    # Generate random log time
    log_time = datetime.datetime.now().strftime("%H:%M:%S")

    # Generate random HTTP method
    http_method = random.choice(["GET", "POST", "PUT", "DELETE"])

    # Generate random resource path
    resource_path = random.choice(
        [
            "/TheApplication/WebResource.axd",
            "/TheApplication/WebResource2.axd",
            "/TheApplication/WebResource3.axd",
        ]
    )

    # Generate random status code
    status_code = random.choice([200, 400, 404, 500])

    return f"{log_time} {ip_address} {http_method} {resource_path} {status_code}"


def generate_log_file(num_entries):
    with open("dummy.log", "w") as f:
        for _ in range(num_entries):
            f.write(generate_log_entry() + "\n")


generate_log_file(100000)
