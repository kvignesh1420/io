window.BENCHMARK_DATA = {
  "lastUpdate": 1610998665777,
  "repoUrl": "https://github.com/kvignesh1420/io",
  "entries": {
    "Tensorflow-IO Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "vikoth18@in.ibm.com",
            "name": "Vignesh Kothapalli",
            "username": "kvignesh1420"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb9e6284182cfccdaa207ff118308109124bf44b",
          "message": "Merge pull request #1 from kvignesh1420/benchmarks-deps\n\n[Benchmarks] Test gh-pages deployment",
          "timestamp": "2021-01-19T00:59:18+05:30",
          "tree_id": "08e90708e7a2b56ce5ee09ae6475345ecca503a5",
          "url": "https://github.com/kvignesh1420/io/commit/cb9e6284182cfccdaa207ff118308109124bf44b"
        },
        "date": 1610998665101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[mnist]",
            "value": 3.491048191737148,
            "unit": "iter/sec",
            "range": "stddev: 0.05557261686771086",
            "extra": "mean: 286.44691939998665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[lmdb]",
            "value": 27.602087493657056,
            "unit": "iter/sec",
            "range": "stddev: 0.0006501719182594938",
            "extra": "mean: 36.22914390912642 msec\nrounds: 11"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav]]",
            "value": 1.2308909700523352,
            "unit": "iter/sec",
            "range": "stddev: 0.06376505732577742",
            "extra": "mean: 812.4196409999513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[wav|s24]]",
            "value": 1.2405368222627748,
            "unit": "iter/sec",
            "range": "stddev: 0.061047363578351",
            "extra": "mean: 806.1026339999898 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[flac]]",
            "value": 1.25618867411407,
            "unit": "iter/sec",
            "range": "stddev: 0.0618458229784269",
            "extra": "mean: 796.058761400036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[vorbis]]",
            "value": 0.4856326729513054,
            "unit": "iter/sec",
            "range": "stddev: 0.07242107018808783",
            "extra": "mean: 2.0591695240000263 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[audio[mp3]]",
            "value": 0.37472102685618164,
            "unit": "iter/sec",
            "range": "stddev: 0.07001756043549444",
            "extra": "mean: 2.66865195259993 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[hdf5]",
            "value": 0.6847729941895213,
            "unit": "iter/sec",
            "range": "stddev: 0.02005692189843298",
            "extra": "mean: 1.460337963800066 sec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy]",
            "value": 3.438880257780524,
            "unit": "iter/sec",
            "range": "stddev: 0.05761366558549882",
            "extra": "mean: 290.7923292000305 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[structure]]",
            "value": 2.031613377479741,
            "unit": "iter/sec",
            "range": "stddev: 0.071097431137356",
            "extra": "mean: 492.2196373999668 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/tuple]]",
            "value": 1.9788885833483763,
            "unit": "iter/sec",
            "range": "stddev: 0.0701332347482097",
            "extra": "mean: 505.3341600000294 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[numpy[file/dict]]",
            "value": 1.8367826313551407,
            "unit": "iter/sec",
            "range": "stddev: 0.070336847800259",
            "extra": "mean: 544.430235200025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_dataset_eager.py::test_io_dataset_benchmark[sql]",
            "value": 22.19742858240145,
            "unit": "iter/sec",
            "range": "stddev: 0.001536505222163243",
            "extra": "mean: 45.05026319998251 msec\nrounds: 5"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav]]",
            "value": 5233.051842334429,
            "unit": "iter/sec",
            "range": "stddev: 0.00003276976326204323",
            "extra": "mean: 191.09308107941595 usec\nrounds: 2257"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[wav|s24]]",
            "value": 3742.191987402714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003024912337500994",
            "extra": "mean: 267.2230616083529 usec\nrounds: 2451"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[flac]]",
            "value": 883.1035847310947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630992229625104",
            "extra": "mean: 1.1323699929318034 msec\nrounds: 849"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[vorbis]]",
            "value": 484.1565689188921,
            "unit": "iter/sec",
            "range": "stddev: 0.00011696312303605069",
            "extra": "mean: 2.0654475518796978 msec\nrounds: 453"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[audio[mp3]]",
            "value": 1546.5830888398486,
            "unit": "iter/sec",
            "range": "stddev: 0.00007678446069803498",
            "extra": "mean: 646.5866639923876 usec\nrounds: 997"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[hdf5]",
            "value": 673.5160001020761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000868882723923423",
            "extra": "mean: 1.48474572222255 msec\nrounds: 396"
          },
          {
            "name": "tests/test_io_tensor_eager.py::test_io_tensor_benchmark[arrow]",
            "value": 1106.3071156390843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005249421964816356",
            "extra": "mean: 903.9081335225133 usec\nrounds: 719"
          }
        ]
      }
    ]
  }
}