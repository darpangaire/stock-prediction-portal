import Button from "./Button";


export default function Main() {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction App</h1>
          <p className="text-light lead">
            📈 The Future of Investing: How AI is Changing Stock Prediction In
            today’s fast-moving markets, traditional stock analysis is no longer
            enough. With thousands of data points — from social media sentiment
            to global news and real-time trading data — investors are turning to
            Artificial Intelligence (AI) to gain an edge. AI-driven stock
            prediction models don’t just look at historical prices; they learn
            patterns from massive datasets.
          </p>
          <Button text='login' class='btn-outline-warning' />
        </div>
      </div>
    </>
  );
}




