function ResponseCard({ response, handleCerts }) {
  return (
    <div>
      <section className="res_card" key={response.id}>
        <p>
          <span>Full name: </span>
          {response.full_name}
        </p>
        <p>
          <span>Email address: </span>
          {response.email_address}
        </p>
        <p>
          <span>Description: </span>
          {response.description}
        </p>
        <p>
          <span>Gender: </span>
          {response.gender}
        </p>
        <p>
          <span>Programming stack: </span>
          {response.programming_stack}
        </p>
        {/* show certificates */}
        <section>
          <span>Certificates </span>
          {handleCerts(response.certificates)}
        </section>
      </section>
    </div>
  );
}

export default ResponseCard;
