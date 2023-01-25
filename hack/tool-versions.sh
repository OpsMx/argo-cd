#!/bin/sh
###############################################################################
# This file defines the versions of the tools that are installed in the CI
# toolchain and the Docker image.
#
# Updating a tool's version here is not enough, you will need to create a
# checksum file in ./hack/installers/checksums matching the name of the
# downloaded binary with a ".sha256" suffix appended, containing the proper
# SHA256 sum of the binary.
#
# Use ./hack/installers/checksums/add-helm-checksums.sh and
# add-kustomize-checksums.sh to help download checksums.
###############################################################################
<<<<<<< HEAD
helm3_version=3.14.3
=======
helm3_version=3.10.1
>>>>>>> ac0fce6b6 (Inital commint - Argo CD v2.5.4 release version)
kubectl_version=1.17.8
kubectx_version=0.6.3
kustomize5_version=5.2.1
protoc_version=3.17.3
