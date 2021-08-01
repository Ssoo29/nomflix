import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const paresedId = parseInt(id);
    if (isNaN(paresedId)) {
      return push("/");
    }
    this.setState({ loading: true });
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(paresedId));
      } else {
        ({ data: result } = await tvApi.tvShowDetail(paresedId));
      }
    } catch (error) {
      this.setState({ error: `Can't find ${isMovie ? "movie" : "TV shows"}` });
    } finally {
      this.setState({
        result,
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
